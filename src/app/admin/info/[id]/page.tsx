import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import EditForm from "./EditForm";

type InfoPost = {
  id: number;
  title: string;
  content: string;
  category: string;
};

export default async function EditInfoPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/admin/login");

  const { id } = await params;
  const postId = Number(id);
  if (!Number.isFinite(postId)) notFound();

  const { data: post } = await supabase
    .from("info_posts")
    .select("id, title, content, category")
    .eq("id", postId)
    .single<InfoPost>();

  if (!post) notFound();

  return (
    <div className="max-w-3xl">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/admin/info" className="hover:text-accent">
          ← 정보글 관리
        </Link>
      </nav>
      <h1 className="text-2xl font-bold">정보글 수정</h1>
      <EditForm post={post} />
    </div>
  );
}
