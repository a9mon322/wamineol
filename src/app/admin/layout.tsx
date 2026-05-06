import { redirect } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { logout } from "./login/actions";

export const metadata = {
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  // 로그인 페이지는 통과
  // (Next.js layout은 자식 라우트의 path 알기 어려워서 page에서 별도 처리)
  if (!data.user) {
    // 자식이 /admin/login인 경우만 통과시키려면 layout 위에서 처리 필요.
    // 여기선 단순히 미인증 시 로그인 페이지로 보냄.
    return <>{children}</>;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 md:px-6">
      <div className="mb-6 flex items-center justify-between rounded-lg border border-border bg-surface p-3">
        <div className="flex items-center gap-4 text-sm">
          <span className="rounded-md bg-accent/20 px-2 py-1 text-xs font-semibold text-accent">
            관리자
          </span>
          <Link href="/admin" className="hover:text-accent">
            대시보드
          </Link>
          <Link href="/admin/guides" className="hover:text-accent">
            직업 공략
          </Link>
          <Link href="/admin/info" className="hover:text-accent">
            정보글
          </Link>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="text-xs text-muted hover:text-accent"
          >
            로그아웃 ({data.user.email})
          </button>
        </form>
      </div>
      {children}
    </div>
  );
}
