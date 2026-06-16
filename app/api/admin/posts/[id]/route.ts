import { NextResponse } from "next/server";
import { supabase } from "../../../../../lib/supabase";

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

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET /api/admin/posts/[id]
export async function GET(request: Request, { params }: RouteParams) {
  if (!verifyToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 404 });
  }

  return NextResponse.json(data);
}

// PUT /api/admin/posts/[id]
export async function PUT(request: Request, { params }: RouteParams) {
  if (!verifyToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  try {
    const body = await request.json();

    const { data, error } = await supabase
      .from("blog_posts")
      .update({
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        read_time: body.read_time,
        date: body.date,
        meta_title: body.meta_title,
        meta_description: body.meta_description,
        faqs: body.faqs,
        status: body.status,
        updated_at: new Date().toISOString(),
      })
      .eq("id", id)
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

// DELETE /api/admin/posts/[id]
export async function DELETE(request: Request, { params }: RouteParams) {
  if (!verifyToken(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;

  const { error } = await supabase
    .from("blog_posts")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
