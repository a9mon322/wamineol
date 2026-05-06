import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 0;

type InfoPost = {
  id: number;
  title: string;
  content: string;
  category: string;
  created_at: string;
};

export default async function InfoDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);
  if (!Number.isFinite(postId)) notFound();

  const supabase = await createClient();
  const { data: post } = await supabase
    .from("info_posts")
    .select("id, title, content, category, created_at")
    .eq("id", postId)
    .single<InfoPost>();

  if (!post) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/info" className="hover:text-accent">
          ← 정보글 목록
        </Link>
      </nav>

      <article className="rounded-lg border border-border bg-surface p-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="rounded-full border border-border bg-background px-2 py-0.5 text-xs text-muted">
            {post.category}
          </span>
          <span className="text-xs text-muted">
            {new Date(post.created_at).toLocaleDateString("ko-KR")}
          </span>
        </div>
        <h1 className="mt-3 text-2xl font-bold md:text-3xl">{post.title}</h1>
        <div className="mt-6 whitespace-pre-wrap text-foreground/90 leading-7">
          {post.content}
        </div>
      </article>
    </div>
  );
}
