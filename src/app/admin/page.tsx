import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/admin/login");

  const [{ count: guideCount }, { count: postCount }, { count: infoCount }] =
    await Promise.all([
      supabase.from("class_guides").select("*", { count: "exact", head: true }),
      supabase.from("posts").select("*", { count: "exact", head: true }),
      supabase.from("info_posts").select("*", { count: "exact", head: true }),
    ]);

  return (
    <div>
      <h1 className="text-2xl font-bold">대시보드</h1>
      <p className="mt-1 text-sm text-muted">
        와미널 관리자 페이지. 여기서 공략글과 정보글을 관리합니다.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <StatCard label="작성된 공략" value={guideCount ?? 0} href="/admin/guides" />
        <StatCard label="유저 게시글" value={postCount ?? 0} href="/board" />
        <StatCard label="정보글" value={infoCount ?? 0} href="/admin/info" />
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/guides"
          className="rounded-lg border border-border bg-surface p-6 hover:border-accent hover:bg-surface-2"
        >
          <p className="text-2xl">📚</p>
          <h2 className="mt-2 font-bold">직업 공략 작성</h2>
          <p className="mt-1 text-sm text-muted">
            13직업 × 39전문화 × 4섹션 (쐐기·레이드·BIS·도핑) 콘텐츠 관리
          </p>
        </Link>
        <Link
          href="/admin/info"
          className="rounded-lg border border-border bg-surface p-6 hover:border-accent hover:bg-surface-2"
        >
          <p className="text-2xl">📰</p>
          <h2 className="mt-2 font-bold">정보글 작성</h2>
          <p className="mt-1 text-sm text-muted">
            다른 게임 정보, 유용한 사이트 소개 등 자유 콘텐츠
          </p>
        </Link>
      </div>
    </div>
  );
}

function StatCard({
  label,
  value,
  href,
}: {
  label: string;
  value: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="rounded-lg border border-border bg-surface p-5 hover:border-accent"
    >
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-1 text-3xl font-bold text-accent">{value}</p>
    </Link>
  );
}
