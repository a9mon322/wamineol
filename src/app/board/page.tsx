import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const metadata = {
  title: "자유게시판 | 와미널",
  description: "와우 한밤 한국 유저 자유게시판. 익명으로 의견을 나눠보세요.",
};

export const revalidate = 0;

type Post = {
  id: number;
  title: string;
  nickname: string;
  created_at: string;
  view_count: number;
  comment_count?: number;
};

export default async function BoardPage() {
  const supabase = await createClient();
  const { data: posts, error } = await supabase
    .from("posts")
    .select("id, title, nickname, created_at, view_count")
    .order("created_at", { ascending: false })
    .limit(50);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <header className="mb-6 flex items-end justify-between">
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">자유게시판</h1>
          <p className="mt-1 text-sm text-muted">
            로그인 불필요. 닉네임과 비밀번호만 정하면 글쓰기 가능.
          </p>
        </div>
        <Link
          href="/board/write"
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
        >
          글쓰기
        </Link>
      </header>

      {error && (
        <div className="rounded-lg border border-red-500/40 bg-red-950/30 p-4 text-sm text-red-300">
          <p className="font-semibold">DB 연결 오류</p>
          <p className="mt-1 text-xs opacity-80">
            Supabase 환경변수가 설정되지 않았거나 테이블이 없어요. (`.env.local` + SQL 스키마 필요)
          </p>
        </div>
      )}

      <div className="overflow-hidden rounded-lg border border-border">
        <table className="w-full text-sm">
          <thead className="bg-surface text-muted">
            <tr>
              <th className="px-4 py-3 text-left">제목</th>
              <th className="hidden px-4 py-3 text-left sm:table-cell w-32">작성자</th>
              <th className="hidden px-4 py-3 text-left md:table-cell w-32">날짜</th>
              <th className="px-4 py-3 text-right w-16">조회</th>
            </tr>
          </thead>
          <tbody>
            {(posts as Post[] | null)?.length ? (
              (posts as Post[]).map((p) => (
                <tr
                  key={p.id}
                  className="border-t border-border bg-background hover:bg-surface/40"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/board/${p.id}`}
                      className="font-medium hover:text-accent"
                    >
                      {p.title}
                    </Link>
                  </td>
                  <td className="hidden px-4 py-3 text-muted sm:table-cell">
                    {p.nickname}
                  </td>
                  <td className="hidden px-4 py-3 text-muted md:table-cell">
                    {formatDate(p.created_at)}
                  </td>
                  <td className="px-4 py-3 text-right text-muted">
                    {p.view_count ?? 0}
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-t border-border bg-background">
                <td
                  colSpan={4}
                  className="px-4 py-12 text-center text-muted"
                >
                  아직 작성된 글이 없습니다. 첫 글을 남겨주세요!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso);
  const today = new Date();
  if (d.toDateString() === today.toDateString()) {
    return `${String(d.getHours()).padStart(2, "0")}:${String(
      d.getMinutes()
    ).padStart(2, "0")}`;
  }
  return `${d.getMonth() + 1}/${d.getDate()}`;
}
