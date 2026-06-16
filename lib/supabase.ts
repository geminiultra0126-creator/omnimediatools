import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Create a dummy client if env vars are not set (build time / local dev)
let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Provide a mock client that returns empty results gracefully
  // This prevents build-time crashes when env vars aren't set
  supabase = {
    from: () => ({
      select: () => ({
        eq: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "No Supabase configured" } }),
            order: () => Promise.resolve({ data: [], error: null }),
          }),
          single: () => Promise.resolve({ data: null, error: { message: "No Supabase configured" } }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        order: () => Promise.resolve({ data: [], error: null }),
      }),
      insert: () => ({
        select: () => ({
          single: () => Promise.resolve({ data: null, error: { message: "No Supabase configured" } }),
        }),
      }),
      update: () => ({
        eq: () => ({
          select: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "No Supabase configured" } }),
          }),
        }),
      }),
      delete: () => ({
        eq: () => Promise.resolve({ error: { message: "No Supabase configured" } }),
      }),
    }),
  } as unknown as SupabaseClient;
}

export { supabase };

// Database blog post type
export interface DBBlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  date: string;
  meta_title: string;
  meta_description: string;
  faqs: { question: string; answer: string }[] | null;
  status: "draft" | "published";
  created_at: string;
  updated_at: string;
}
