"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface PostFormData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  date: string;
  meta_title: string;
  meta_description: string;
  faqs: FAQ[];
  status: "draft" | "published";
}

interface PostFormProps {
  initialData?: Partial<PostFormData>;
  onSubmit: (data: PostFormData) => Promise<void>;
  submitLabel: string;
  isLoading?: boolean;
}

const CATEGORIES = ["Guides", "Education", "Tips", "Resources", "News", "Tutorial"];

export default function PostForm({
  initialData,
  onSubmit,
  submitLabel,
  isLoading = false,
}: PostFormProps) {
  const [form, setForm] = useState<PostFormData>({
    title: initialData?.title || "",
    slug: initialData?.slug || "",
    excerpt: initialData?.excerpt || "",
    content: initialData?.content || "",
    category: initialData?.category || "Guides",
    read_time: initialData?.read_time || "5 min read",
    date: initialData?.date || new Date().toISOString().split("T")[0],
    meta_title: initialData?.meta_title || "",
    meta_description: initialData?.meta_description || "",
    faqs: initialData?.faqs || [],
    status: initialData?.status || "published",
  });

  const [showPreview, setShowPreview] = useState(false);

  const updateField = (field: keyof PostFormData, value: string | FAQ[] | "draft" | "published") => {
    setForm((prev) => {
      const updated = { ...prev, [field]: value };
      // Auto-generate slug from title
      if (field === "title" && !initialData?.slug) {
        updated.slug = (value as string)
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
      }
      // Auto-fill meta_title from title
      if (field === "title" && !updated.meta_title) {
        updated.meta_title = `${value} | Omni Media Tools Blog`;
      }
      return updated;
    });
  };

  const addFAQ = () => {
    setForm((prev) => ({
      ...prev,
      faqs: [...prev.faqs, { question: "", answer: "" }],
    }));
  };

  const removeFAQ = (index: number) => {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.filter((_, i) => i !== index),
    }));
  };

  const updateFAQ = (index: number, field: "question" | "answer", value: string) => {
    setForm((prev) => ({
      ...prev,
      faqs: prev.faqs.map((faq, i) =>
        i === index ? { ...faq, [field]: value } : faq
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(form);
  };

  // Estimate read time from content
  const estimateReadTime = () => {
    const words = form.content.replace(/<[^>]*>/g, "").split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 200));
    updateField("read_time", `${minutes} min read`);
  };

  const inputClass =
    "w-full px-4 py-2.5 bg-[#12121a] border border-[#1e1e2e] rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-all text-sm";
  const labelClass = "block text-xs font-medium text-gray-400 mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title & Slug */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Title *</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => updateField("title", e.target.value)}
            className={inputClass}
            placeholder="How to Download Your Own Videos Safely"
            required
          />
        </div>
        <div>
          <label className={labelClass}>Slug (URL)</label>
          <input
            type="text"
            value={form.slug}
            onChange={(e) => updateField("slug", e.target.value)}
            className={inputClass}
            placeholder="how-to-download-your-own-videos-safely"
          />
        </div>
      </div>

      {/* Excerpt */}
      <div>
        <label className={labelClass}>Excerpt / Short Description</label>
        <textarea
          value={form.excerpt}
          onChange={(e) => updateField("excerpt", e.target.value)}
          className={`${inputClass} resize-none`}
          rows={2}
          placeholder="A brief description of the blog post for cards and SEO..."
        />
      </div>

      {/* Category, Read Time, Date, Status */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className={labelClass}>Category</label>
          <select
            value={form.category}
            onChange={(e) => updateField("category", e.target.value)}
            className={inputClass}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass}>
            Read Time
            <button
              type="button"
              onClick={estimateReadTime}
              className="ml-2 text-violet-400 hover:text-violet-300"
            >
              (auto)
            </button>
          </label>
          <input
            type="text"
            value={form.read_time}
            onChange={(e) => updateField("read_time", e.target.value)}
            className={inputClass}
            placeholder="5 min read"
          />
        </div>
        <div>
          <label className={labelClass}>Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => updateField("date", e.target.value)}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Status</label>
          <select
            value={form.status}
            onChange={(e) => updateField("status", e.target.value as "draft" | "published")}
            className={inputClass}
          >
            <option value="published">✅ Published</option>
            <option value="draft">📝 Draft</option>
          </select>
        </div>
      </div>

      {/* Content Editor */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <label className={labelClass + " mb-0"}>Content (HTML)</label>
          <button
            type="button"
            onClick={() => setShowPreview(!showPreview)}
            className="text-xs text-violet-400 hover:text-violet-300 transition-colors"
          >
            {showPreview ? "✏️ Editor" : "👁️ Preview"}
          </button>
        </div>

        {showPreview ? (
          <div
            className="w-full min-h-[400px] px-6 py-4 bg-[#12121a] border border-[#1e1e2e] rounded-xl text-sm text-gray-200 prose prose-invert prose-sm max-w-none overflow-auto"
            dangerouslySetInnerHTML={{ __html: form.content }}
          />
        ) : (
          <textarea
            value={form.content}
            onChange={(e) => updateField("content", e.target.value)}
            className={`${inputClass} resize-y font-mono text-xs leading-relaxed`}
            rows={18}
            placeholder={`<p>Write your blog content here using HTML...</p>\n\n<h2>Subheading</h2>\n<p>Paragraph text...</p>\n\n<ul>\n  <li><strong>Bold text:</strong> Description</li>\n</ul>`}
          />
        )}

        {/* Quick HTML buttons */}
        <div className="flex flex-wrap gap-1.5 mt-2">
          {[
            { label: "H2", tag: "<h2>", close: "</h2>" },
            { label: "H3", tag: "<h3>", close: "</h3>" },
            { label: "P", tag: "<p>", close: "</p>" },
            { label: "Bold", tag: "<strong>", close: "</strong>" },
            { label: "Link", tag: '<a href="">', close: "</a>" },
            { label: "UL", tag: "<ul>\n  <li>", close: "</li>\n</ul>" },
            { label: "OL", tag: "<ol>\n  <li>", close: "</li>\n</ol>" },
            { label: "LI", tag: "  <li>", close: "</li>" },
          ].map((btn) => (
            <button
              key={btn.label}
              type="button"
              onClick={() => {
                updateField("content", form.content + `\n\n${btn.tag}${btn.close}`);
              }}
              className="px-2 py-1 text-[10px] font-mono bg-[#1e1e2e] text-gray-400 rounded hover:bg-violet-600/20 hover:text-violet-400 transition-all"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* SEO Fields */}
      <div className="rounded-xl border border-[#1e1e2e] p-4 space-y-4">
        <h3 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
          🔍 SEO Settings
        </h3>
        <div>
          <label className={labelClass}>Meta Title</label>
          <input
            type="text"
            value={form.meta_title}
            onChange={(e) => updateField("meta_title", e.target.value)}
            className={inputClass}
            placeholder="Blog Post Title | Omni Media Tools Blog"
          />
          <p className="text-[10px] text-gray-600 mt-1">
            {form.meta_title.length}/60 characters
          </p>
        </div>
        <div>
          <label className={labelClass}>Meta Description</label>
          <textarea
            value={form.meta_description}
            onChange={(e) => updateField("meta_description", e.target.value)}
            className={`${inputClass} resize-none`}
            rows={2}
            placeholder="A compelling description for search engines..."
          />
          <p className="text-[10px] text-gray-600 mt-1">
            {form.meta_description.length}/160 characters
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="rounded-xl border border-[#1e1e2e] p-4 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-gray-300">❓ FAQs (Optional)</h3>
          <button
            type="button"
            onClick={addFAQ}
            className="px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-400 rounded-lg hover:bg-violet-600/30 transition-all"
          >
            + Add FAQ
          </button>
        </div>

        {form.faqs.map((faq, index) => (
          <div key={index} className="space-y-2 p-3 bg-[#0f0f18] rounded-lg">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-gray-500">FAQ #{index + 1}</span>
              <button
                type="button"
                onClick={() => removeFAQ(index)}
                className="text-xs text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>
            <input
              type="text"
              value={faq.question}
              onChange={(e) => updateFAQ(index, "question", e.target.value)}
              className={inputClass}
              placeholder="Question..."
            />
            <textarea
              value={faq.answer}
              onChange={(e) => updateFAQ(index, "answer", e.target.value)}
              className={`${inputClass} resize-none`}
              rows={2}
              placeholder="Answer..."
            />
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="flex items-center gap-3 pt-2">
        <button
          type="submit"
          disabled={isLoading || !form.title || !form.content}
          className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Saving...
            </span>
          ) : (
            submitLabel
          )}
        </button>
        <span className="text-xs text-gray-600">
          {form.status === "draft" ? "📝 Will be saved as draft" : "✅ Will be published immediately"}
        </span>
      </div>
    </form>
  );
}
