import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { SECTIONS, getClass, getSpec } from "@/data/classes";
import { createClient } from "@/lib/supabase/server";
import GuideEditor from "./GuideEditor";

export default async function AdminGuideEditPage({
  params,
}: {
  params: Promise<{ class: string; spec: string }>;
}) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/admin/login");

  const { class: classSlug, spec: specSlug } = await params;
  const cls = getClass(classSlug);
  const spec = getSpec(classSlug, specSlug);
  if (!cls || !spec) notFound();

  const { data: guides } = await supabase
    .from("class_guides")
    .select("section_slug, content")
    .eq("class_slug", classSlug)
    .eq("spec_slug", specSlug);

  const contentMap = new Map<string, string>(
    (guides ?? []).map((g) => [g.section_slug as string, g.content as string])
  );

  return (
    <div>
      <nav className="mb-4 text-sm text-muted">
        <Link href="/admin/guides" className="hover:text-accent">
          ← 공략 관리
        </Link>
      </nav>

      <h1 className="text-2xl font-bold">
        <span style={{ color: cls.color }}>{cls.name}</span> {spec.name}{" "}
        공략 편집
      </h1>

      <div className="mt-6 space-y-6">
        {SECTIONS.map((section) => (
          <GuideEditor
            key={section.slug}
            classSlug={classSlug}
            specSlug={specSlug}
            sectionSlug={section.slug}
            sectionName={section.name}
            initialContent={contentMap.get(section.slug) ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
