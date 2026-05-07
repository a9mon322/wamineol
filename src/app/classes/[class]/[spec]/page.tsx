import Link from "next/link";
import { notFound } from "next/navigation";
import { CLASSES, SECTIONS, getClass, getSpec } from "@/data/classes";
import { getTalentBuilds, type TalentBuildSection } from "@/data/talent-builds";
import TalentBuildCard from "@/components/TalentBuildCard";
import { createClient } from "@/lib/supabase/server";

export const revalidate = 0;

export function generateStaticParams() {
  return CLASSES.flatMap((c) =>
    c.specs.map((s) => ({ class: c.slug, spec: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ class: string; spec: string }>;
}) {
  const { class: classSlug, spec: specSlug } = await params;
  const cls = getClass(classSlug);
  const spec = getSpec(classSlug, specSlug);
  if (!cls || !spec) return {};
  return {
    title: `${cls.name} ${spec.name} 공략 | 와미널`,
    description: `${cls.name} ${spec.name} 쐐기·레이드·BIS·도핑 한국어 공략`,
  };
}

export default async function SpecPage({
  params,
}: {
  params: Promise<{ class: string; spec: string }>;
}) {
  const { class: classSlug, spec: specSlug } = await params;
  const cls = getClass(classSlug);
  const spec = getSpec(classSlug, specSlug);
  if (!cls || !spec) notFound();

  const supabase = await createClient();
  const { data: guides } = await supabase
    .from("class_guides")
    .select("section_slug, content, updated_at")
    .eq("class_slug", classSlug)
    .eq("spec_slug", specSlug);

  const contentMap = new Map<string, { content: string; updated_at: string }>(
    (guides ?? []).map((g) => [
      g.section_slug as string,
      {
        content: g.content as string,
        updated_at: g.updated_at as string,
      },
    ])
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/classes" className="hover:text-accent">
          직업 목록
        </Link>
        {" / "}
        <Link href={`/classes/${cls.slug}`} className="hover:text-accent">
          {cls.name}
        </Link>
        {" / "}
        <span className="text-foreground">{spec.name}</span>
      </nav>

      <header className="mb-8 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: cls.color }}
          />
          <h1 className="text-4xl font-bold md:text-5xl">
            <span style={{ color: cls.color }}>{cls.name}</span>{" "}
            <span className="text-foreground">{spec.name}</span>
          </h1>
          <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
            {spec.role}
          </span>
        </div>
      </header>

      {/* 섹션 빠른이동 */}
      <nav className="mb-8 flex flex-wrap gap-2">
        {SECTIONS.map((s) => (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            className="rounded-md border border-border bg-surface px-3 py-1.5 text-sm hover:border-accent hover:text-accent"
          >
            {s.name}
          </a>
        ))}
      </nav>

      <div className="space-y-8">
        {SECTIONS.map((section) => {
          const guide = contentMap.get(section.slug);
          const builds =
            section.slug === "mythic-plus" || section.slug === "raid"
              ? getTalentBuilds(
                  classSlug,
                  specSlug,
                  section.slug as TalentBuildSection
                )
              : [];
          const hasContent = builds.length > 0 || !!guide?.content;

          return (
            <section
              key={section.slug}
              id={section.slug}
              className="scroll-mt-20 rounded-lg border border-border bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-accent">
                  {section.name}
                </h2>
                {guide?.updated_at && (
                  <span className="text-xs text-muted">
                    업데이트{" "}
                    {new Date(guide.updated_at).toLocaleDateString("ko-KR")}
                  </span>
                )}
              </div>

              {builds.length > 0 && (
                <div className="mt-4">
                  <h3 className="mb-3 text-sm font-bold text-muted">
                    추천 특성 빌드
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {builds.map((b) => (
                      <TalentBuildCard key={b.heroTalentSlug} build={b} />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-4">
                {guide?.content ? (
                  <div className="whitespace-pre-wrap leading-7 text-foreground/90">
                    {guide.content}
                  </div>
                ) : (
                  !hasContent && (
                    <p className="italic text-muted">
                      아직 공략이 작성되지 않았습니다. 곧 업데이트 예정.
                    </p>
                  )
                )}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
