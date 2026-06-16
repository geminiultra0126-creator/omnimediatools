import { NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabase";

// Verify admin token
function verifyToken(request: Request): boolean {
  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) return false;

  try {
    const token = authHeader.split(" ")[1];
    const decoded = JSON.parse(Buffer.from(token, "base64").toString());
    if (decoded.password !== process.env.ADMIN_PASSWORD) return false;
    if (decoded.exp < Date.now()) return false;
    return true;
  } catch {
    return false;
  }
}

// GET /api/admin/posts — List all posts (DB + hardcoded)
export async function GET(request: Request) {
  if (!verifyToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch DB posts
  const { data: dbPosts } = await supabase
    .from("blog_posts")
    .select("*")
    .order("date", { ascending: false });

  // Get hardcoded posts
  const { blogPosts } = await import("../../../../lib/blog-data");
  const staticPosts = blogPosts.map((p) => ({
    id: `static-${p.slug}`,
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    content: p.content,
    category: p.category,
    read_time: p.readTime,
    date: p.date,
    meta_title: p.metaTitle,
    meta_description: p.metaDescription,
    faqs: p.faqs || null,
    status: "published",
    source: "static",
  }));

  // Merge: DB posts first (editable), then static posts (read-only)
  const dbSlugs = new Set((dbPosts || []).map((p: { slug: string }) => p.slug));
  const filteredStatic = staticPosts.filter((p) => !dbSlugs.has(p.slug));

  const allPosts = [
    ...(dbPosts || []).map((p: Record<string, unknown>) => ({ ...p, source: "database" })),
    ...filteredStatic,
  ];

  // Sort by date
  allPosts.sort((a, b) => new Date(b.date as string).getTime() - new Date(a.date as string).getTime());

  return NextResponse.json(allPosts);
}

// POST /api/admin/posts — Create a new post
export async function POST(request: Request) {
  if (!verifyToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();

    // Generate slug from title if not provided
    if (!body.slug) {
      body.slug = body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
    }

    const { data, error } = await supabase
      .from("blog_posts")
      .insert([
        {
          slug: body.slug,
          title: body.title,
          excerpt: body.excerpt || "",
          content: body.content || "",
          category: body.category || "Guides",
          read_time: body.read_time || "5 min read",
          date: body.date || new Date().toISOString().split("T")[0],
          meta_title: body.meta_title || body.title,
          meta_description: body.meta_description || body.excerpt || "",
          faqs: body.faqs || null,
          status: body.status || "published",
        },
      ])
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
