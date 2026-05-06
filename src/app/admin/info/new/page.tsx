import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import NewInfoForm from "./NewInfoForm";

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
      <NewInfoForm />
    </div>
  );
}
