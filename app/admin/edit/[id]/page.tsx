"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import AdminLayout from "../../../../components/admin/AdminLayout";
import PostForm from "../../../../components/admin/PostForm";

export default function EditPostPage() {
  const [post, setPost] = useState<Record<string, unknown> | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const fetchPost = useCallback(async () => {
    const token = localStorage.getItem("admin_token");
    if (!token) return;

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        setError("Post not found");
        return;
      }

      const data = await res.json();
      setPost(data);
    } catch {
      setError("Failed to load post");
    } finally {
      setFetchLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  const handleSubmit = async (data: { [key: string]: unknown }) => {
    setIsLoading(true);
    setError("");

    const token = localStorage.getItem("admin_token");
    if (!token) {
      setError("Not authenticated");
      setIsLoading(false);
      return;
    }

    try {
      const res = await fetch(`/api/admin/posts/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Failed to update post");
        return;
      }

      router.push("/admin");
    } catch {
      setError("Network error. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Edit Post</h1>
          <p className="text-sm text-gray-500 mt-1">
            Update your blog article
          </p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
            {error}
          </div>
        )}

        {fetchLoading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-violet-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : post ? (
          <PostForm
            initialData={post as { [key: string]: unknown }}
            onSubmit={handleSubmit}
            submitLabel="Update Post"
            isLoading={isLoading}
          />
        ) : (
          <p className="text-gray-500">Post not found.</p>
        )}
      </div>
    </AdminLayout>
  );
}
