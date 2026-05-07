import Link from "next/link";
import { notFound } from "next/navigation";
import { CLASSES, getClass } from "@/data/classes";

export function generateStaticParams() {
  return CLASSES.map((c) => ({ class: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ class: string }>;
}) {
  const { class: classSlug } = await params;
  const cls = getClass(classSlug);
  if (!cls) return {};
  return {
    title: `${cls.name} 공략 | 와미널`,
    description: `월드 오브 워크래프트 한밤 ${cls.name} 전문화별 쐐기·레이드·BIS·도핑 정보`,
  };
}

export default async function ClassPage({
  params,
}: {
  params: Promise<{ class: string }>;
}) {
  const { class: classSlug } = await params;
  const cls = getClass(classSlug);
  if (!cls) notFound();

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/classes" className="hover:text-accent">
          ← 직업 목록으로
        </Link>
      </nav>

      <header className="mb-10 border-b border-border pb-6">
        <div className="flex items-center gap-3">
          <span
            className="h-4 w-4 rounded-full"
            style={{ backgroundColor: cls.color }}
          />
          <h1
            className="text-4xl font-bold md:text-5xl"
            style={{ color: cls.color }}
          >
            {cls.name}
          </h1>
        </div>
        <p className="mt-3 text-muted">
          전문화를 선택하면 쐐기·레이드·BIS·도핑 정보를 볼 수 있습니다.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cls.specs.map((spec) => (
          <Link
            key={spec.slug}
            href={`/classes/${cls.slug}/${spec.slug}`}
            className="group rounded-lg border border-border bg-surface p-6 transition-all hover:border-accent hover:bg-surface-2"
          >
            <div className="flex items-baseline justify-between">
              <h2
                className="text-2xl font-bold"
                style={{ color: cls.color }}
              >
                {spec.name}
              </h2>
              <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
                {spec.role}
              </span>
            </div>
            <p className="mt-2 text-sm text-muted">
              쐐기 · 레이드 · BIS · 도핑
            </p>
            <p className="mt-4 text-sm text-accent opacity-0 transition-opacity group-hover:opacity-100">
              자세히 보기 →
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
