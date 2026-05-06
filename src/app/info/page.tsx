import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "정보글 | 와미널",
  description: "다른 게임 정보, 유용한 사이트 등 관리자 추천 콘텐츠",
};

export const revalidate = 0;

type InfoPost = {
  id: number;
  title: string;
  category: string;
  created_at: string;
};

export default async function InfoPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("info_posts")
    .select("id, title, category, created_at")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold md:text-4xl">기타 정보</h1>
        <p className="mt-1 text-sm text-muted">
          와우 외 다른 게임·유용한 사이트 등 운영자가 직접 큐레이션한 정보.
        </p>
      </header>

      <div className="space-y-3">
        {(posts as InfoPost[] | null)?.length ? (
          (posts as InfoPost[]).map((p) => (
            <Link
              key={p.id}
              href={`/info/${p.id}`}
              className="block rounded-lg border border-border bg-surface p-5 hover:border-accent hover:bg-surface-2"
            >
              <div className="flex items-center gap-2">
                <span className="rounded-full border border-border bg-background px-2 py-0.5 text-xs text-muted">
                  {p.category}
                </span>
                <span className="text-xs text-muted">
                  {new Date(p.created_at).toLocaleDateString("ko-KR")}
                </span>
              </div>
              <h2 className="mt-2 font-semibold">{p.title}</h2>
            </Link>
          ))
        ) : (
          <div className="rounded-lg border border-border bg-surface p-12 text-center text-muted">
            <p>아직 등록된 정보글이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
