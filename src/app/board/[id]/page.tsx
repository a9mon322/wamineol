import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import CommentForm from "./CommentForm";

export const revalidate = 0;

type Post = {
  id: number;
  title: string;
  content: string;
  nickname: string;
  created_at: string;
  view_count: number;
};

type Comment = {
  id: number;
  content: string;
  nickname: string;
  created_at: string;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const postId = Number(id);
  if (!Number.isFinite(postId)) notFound();

  const supabase = await createClient();
  const { data: post } = await supabase
    .from("posts")
    .select("id, title, content, nickname, created_at, view_count")
    .eq("id", postId)
    .single<Post>();

  if (!post) notFound();

  // 조회수 +1 (best-effort)
  await supabase
    .from("posts")
    .update({ view_count: (post.view_count ?? 0) + 1 })
    .eq("id", postId);

  const { data: comments } = await supabase
    .from("comments")
    .select("id, content, nickname, created_at")
    .eq("post_id", postId)
    .order("created_at", { ascending: true });

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/board" className="hover:text-accent">
          ← 게시판으로
        </Link>
      </nav>

      <article className="rounded-lg border border-border bg-surface p-6">
        <h1 className="text-2xl font-bold md:text-3xl">{post.title}</h1>
        <div className="mt-2 flex items-center gap-3 text-sm text-muted">
          <span>{post.nickname}</span>
          <span>·</span>
          <span>{new Date(post.created_at).toLocaleString("ko-KR")}</span>
          <span>·</span>
          <span>조회 {post.view_count ?? 0}</span>
        </div>

        <div className="mt-6 whitespace-pre-wrap text-foreground/90 leading-7">
          {post.content}
        </div>
      </article>

      <section className="mt-8">
        <h2 className="text-lg font-bold">
          댓글 <span className="text-muted">({comments?.length ?? 0})</span>
        </h2>

        <div className="mt-3 space-y-3">
          {(comments as Comment[] | null)?.length ? (
            (comments as Comment[]).map((c) => (
              <div
                key={c.id}
                className="rounded-md border border-border bg-surface p-4"
              >
                <div className="flex items-center gap-2 text-sm text-muted">
                  <span className="font-semibold text-foreground">
                    {c.nickname}
                  </span>
                  <span>·</span>
                  <span>{new Date(c.created_at).toLocaleString("ko-KR")}</span>
                </div>
                <p className="mt-2 whitespace-pre-wrap text-sm">{c.content}</p>
              </div>
            ))
          ) : (
            <p className="rounded-md border border-border bg-surface p-4 text-sm text-muted">
              아직 댓글이 없습니다.
            </p>
          )}
        </div>

        <CommentForm postId={postId} />
      </section>
    </div>
  );
}
