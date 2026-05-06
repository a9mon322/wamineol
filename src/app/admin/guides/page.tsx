import Link from "next/link";
import { redirect } from "next/navigation";
import { CLASSES } from "@/data/classes";
import { createClient } from "@/lib/supabase/server";

export default async function AdminGuidesPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) redirect("/admin/login");

  return (
    <div>
      <h1 className="text-2xl font-bold">직업 공략 관리</h1>
      <p className="mt-1 text-sm text-muted">
        편집할 직업·전문화를 선택하세요.
      </p>

      <div className="mt-6 space-y-3">
        {CLASSES.map((cls) => (
          <details
            key={cls.slug}
            className="rounded-lg border border-border bg-surface"
          >
            <summary className="cursor-pointer px-4 py-3 font-semibold">
              <span style={{ color: cls.color }}>● </span>
              {cls.name}
            </summary>
            <div className="border-t border-border px-4 py-3">
              <div className="flex flex-wrap gap-2">
                {cls.specs.map((spec) => (
                  <Link
                    key={spec.slug}
                    href={`/admin/guides/${cls.slug}/${spec.slug}`}
                    className="rounded-md border border-border bg-background px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
                  >
                    {spec.name}
                  </Link>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}
