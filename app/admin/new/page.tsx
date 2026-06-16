"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminLayout from "../../../components/admin/AdminLayout";
import PostForm from "../../../components/admin/PostForm";

export default function NewPostPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

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
      const res = await fetch("/api/admin/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Failed to create post");
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
          <h1 className="text-2xl font-bold">Create New Post</h1>
          <p className="text-sm text-gray-500 mt-1">
            Write a new blog article for SEO
          </p>
        </div>

        {error && (
          <div className="mb-6 px-4 py-3 bg-red-500/10 border border-red-500/20 rounded-xl text-sm text-red-400">
            {error}
          </div>
        )}

        <PostForm
          onSubmit={handleSubmit}
          submitLabel="Publish Post"
          isLoading={isLoading}
        />
      </div>
    </AdminLayout>
  );
}
