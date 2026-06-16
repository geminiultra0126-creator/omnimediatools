"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import AdminLayout from "../../components/admin/AdminLayout";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  status: string;
  date: string;
  read_time: string;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [deleteId, setDeleteId] = useState<string | null>(null);

  const fetchPosts = useCallback(async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    try {
      const res = await fetch("/api/admin/posts", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        setError("Failed to load posts");
        return;
      }

      const data = await res.json();
      setPosts(data);
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleDelete = async (id: string) => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.id !== id));
        setDeleteId(null);
      }
    } catch {
      setError("Failed to delete post");
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Blog Posts</h1>
            <p className="text-sm text-gray-500 mt-1">
              {posts.length} post{posts.length !== 1 ? "s" : ""} total
            </p>
          </div>
          <Link
            href="/admin/new"
            className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all"
          >
            + New Post
          </Link>
        </div>

        {/* Error */}
        {error && (
          <div className="px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : posts.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-xl font-bold text-gray-300">No posts yet</h2>
            <p className="text-sm text-gray-500 mt-2 mb-6">
              Create your first blog post to get started with SEO!
            </p>
            <Link
              href="/admin/new"
              className="inline-flex px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-indigo-500 transition-all"
            >
              Create First Post
            </Link>
          </div>
        ) : (
          /* Posts Table */
          <div className="overflow-x-auto rounded-xl border border-[#1e1e2e]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#12121a] text-gray-400 text-xs uppercase">
                  <th className="text-left px-4 py-3 font-medium">Title</th>
                  <th className="text-left px-4 py-3 font-medium hidden sm:table-cell">Category</th>
                  <th className="text-left px-4 py-3 font-medium hidden md:table-cell">Date</th>
                  <th className="text-left px-4 py-3 font-medium">Status</th>
                  <th className="text-right px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1e1e2e]">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-[#12121a] transition-colors">
                    <td className="px-4 py-3">
                      <div>
                        <p className="font-medium text-white truncate max-w-[300px]">
                          {post.title}
                        </p>
                        <p className="text-[10px] text-gray-600 mt-0.5">
                          /{post.slug}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden sm:table-cell">
                      <span className="px-2 py-0.5 text-[10px] font-medium bg-violet-600/10 text-violet-400 rounded-full">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-400 hidden md:table-cell">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 text-[10px] font-medium rounded-full ${
                          post.status === "published"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-yellow-500/10 text-yellow-400"
                        }`}
                      >
                        {post.status === "published" ? "✅ Live" : "📝 Draft"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="px-2 py-1 text-[10px] text-gray-400 hover:text-white rounded transition-colors"
                        >
                          View
                        </Link>
                        <Link
                          href={`/admin/edit/${post.id}`}
                          className="px-2 py-1 text-[10px] text-violet-400 hover:text-violet-300 rounded transition-colors"
                        >
                          Edit
                        </Link>
                        {deleteId === post.id ? (
                          <div className="flex items-center gap-1">
                            <button
                              onClick={() => handleDelete(post.id)}
                              className="px-2 py-1 text-[10px] text-red-400 bg-red-500/10 rounded font-medium"
                            >
                              Confirm
                            </button>
                            <button
                              onClick={() => setDeleteId(null)}
                              className="px-2 py-1 text-[10px] text-gray-400 rounded"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => setDeleteId(post.id)}
                            className="px-2 py-1 text-[10px] text-red-400 hover:text-red-300 rounded transition-colors"
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
