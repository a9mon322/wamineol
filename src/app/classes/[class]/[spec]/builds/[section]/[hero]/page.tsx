import Link from "next/link";
import { notFound } from "next/navigation";
import { getClass, getSpec, SECTIONS } from "@/data/classes";
import {
  TALENT_BUILDS,
  type TalentBuildSection,
} from "@/data/talent-builds";
import ImportCodeBlock from "@/components/ImportCodeBlock";

export function generateStaticParams() {
  return TALENT_BUILDS.map((b) => ({
    class: b.classSlug,
    spec: b.specSlug,
    section: b.sectionSlug,
    hero: b.buildSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    class: string;
    spec: string;
    section: string;
    hero: string;
  }>;
}) {
  const p = await params;
  const cls = getClass(p.class);
  const spec = getSpec(p.class, p.spec);
  const build = TALENT_BUILDS.find(
    (b) =>
      b.classSlug === p.class &&
      b.specSlug === p.spec &&
      b.sectionSlug === p.section &&
      b.buildSlug === p.hero
  );
  const section = SECTIONS.find((s) => s.slug === p.section);
  if (!cls || !spec || !build || !section) return {};
  return {
    title: `${cls.name} ${spec.name} ${section.name} ${build.buildName} 빌드 | 와미널`,
    description: `${cls.name} ${spec.name} ${build.buildName} ${section.name} 특성 빌드`,
  };
}

export default async function BuildDetailPage({
  params,
}: {
  params: Promise<{
    class: string;
    spec: string;
    section: string;
    hero: string;
  }>;
}) {
  const p = await params;
  const cls = getClass(p.class);
  const spec = getSpec(p.class, p.spec);
  if (!cls || !spec) notFound();

  const section = SECTIONS.find((s) => s.slug === p.section);
  if (!section) notFound();

  const build = TALENT_BUILDS.find(
    (b) =>
      b.classSlug === p.class &&
      b.specSlug === p.spec &&
      b.sectionSlug === (p.section as TalentBuildSection) &&
      b.buildSlug === p.hero
  );
  if (!build) notFound();

  const badgeLabel = build.sectionSlug === "raid" ? build.buildName : "영웅특성";

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/classes" className="hover:text-accent">
          직업 목록
        </Link>
        {" / "}
        <Link href={`/classes/${cls.slug}`} className="hover:text-accent">
          {cls.name}
        </Link>
        {" / "}
        <Link
          href={`/classes/${cls.slug}/${spec.slug}#${section.slug}`}
          className="hover:text-accent"
        >
          {spec.name} {section.name}
        </Link>
        {" / "}
        <span className="text-foreground">{build.buildName} 빌드</span>
      </nav>

      <header className="mb-8 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-md px-2 py-1 text-xs font-bold"
            style={{
              backgroundColor: `${build.accentColor}22`,
              color: build.accentColor,
              border: `1px solid ${build.accentColor}66`,
            }}
          >
            {badgeLabel}
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">
            <span style={{ color: cls.color }}>{cls.name}</span>{" "}
            <span className="text-foreground">{spec.name}</span>{" "}
            <span style={{ color: build.accentColor }}>
              {build.buildName}
            </span>
          </h1>
        </div>
        <p className="mt-2 text-sm text-muted">
          {section.name} 추천 특성 빌드
        </p>
        {build.description && (
          <p className="mt-4 leading-7 text-foreground/90">
            {build.description}
          </p>
        )}
      </header>

      {build.imageUrl ? (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-accent">특성 트리</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={build.imageUrl}
            alt={`${cls.name} ${spec.name} ${build.buildName} 특성 트리`}
            className="w-full rounded-lg border border-border bg-background"
          />
        </section>
      ) : (
        <section className="mb-8">
          <h2 className="mb-3 text-lg font-bold text-accent">특성 트리</h2>
          <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border bg-background text-sm italic text-muted">
            스크린샷 추가 예정
          </div>
        </section>
      )}

      {build.importCode ? (
        <section className="mb-8 rounded-lg border border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-bold text-accent">Import 코드</h2>
          <p className="mb-3 text-sm text-muted">
            게임 내 특성창 → 임포트 → 아래 코드 붙여넣기
          </p>
          <ImportCodeBlock code={build.importCode} />
        </section>
      ) : (
        <section className="mb-8 rounded-lg border border-dashed border-border bg-surface p-6">
          <h2 className="mb-3 text-lg font-bold text-accent">Import 코드</h2>
          <p className="text-sm italic text-muted">곧 업데이트 예정</p>
        </section>
      )}

      <Link
        href={`/classes/${cls.slug}/${spec.slug}#${section.slug}`}
        className="inline-block rounded-md border border-border bg-surface px-4 py-2 text-sm hover:border-accent hover:text-accent"
      >
        ← {spec.name} 페이지로
      </Link>
    </div>
  );
}
