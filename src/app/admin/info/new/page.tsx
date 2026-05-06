import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createInfoPost } from "../actions";

export default async function NewInfoPostPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/admin/login");

  return (
    <div className="max-w-3xl">
      <nav className="mb-4 text-sm text-muted">
        <Link href="/admin/info" className="hover:text-accent">
          ← 정보글 관리
        </Link>
      </nav>
      <h1 className="text-2xl font-bold">새 정보글 작성</h1>

      <form action={createInfoPost} className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="mb-1 block text-sm text-muted">카테고리</label>
            <input
              name="category"
              defaultValue="general"
              placeholder="예: game, site, news, general"
              className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="mb-1 block text-sm text-muted">제목</label>
          <input
            name="title"
            required
            className="w-full rounded-md border border-border bg-surface px-3 py-2 focus:border-accent focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm text-muted">본문</label>
          <textarea
            name="content"
            required
            rows={16}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex justify-end gap-2">
          <Link
            href="/admin/info"
            className="rounded-md border border-border px-4 py-2 text-sm hover:bg-surface"
          >
            취소
          </Link>
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}
