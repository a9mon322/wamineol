import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

type InfoPost = {
  id: number;
  title: string;
  category: string;
  created_at: string;
};

export default async function AdminInfoListPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/admin/login");

  const { data: posts } = await supabase
    .from("info_posts")
    .select("id, title, category, created_at")
    .order("created_at", { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">정보글 관리</h1>
        <Link
          href="/admin/info/new"
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
        >
          + 새 글
        </Link>
      </div>

      <div className="mt-6 space-y-2">
        {(posts as InfoPost[] | null)?.length ? (
          (posts as InfoPost[]).map((p) => (
            <Link
              key={p.id}
              href={`/admin/info/${p.id}`}
              className="block rounded-md border border-border bg-surface p-4 hover:border-accent"
            >
              <div className="flex items-center gap-2 text-xs text-muted">
                <span className="rounded-full border border-border bg-background px-2 py-0.5">
                  {p.category}
                </span>
                <span>
                  {new Date(p.created_at).toLocaleDateString("ko-KR")}
                </span>
              </div>
              <p className="mt-1 font-semibold">{p.title}</p>
            </Link>
          ))
        ) : (
          <p className="rounded-md border border-border bg-surface p-8 text-center text-muted">
            아직 작성된 정보글이 없습니다.
          </p>
        )}
      </div>
    </div>
  );
}
