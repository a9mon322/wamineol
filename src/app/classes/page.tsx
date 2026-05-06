import Link from "next/link";
import { CLASSES } from "@/data/classes";

export const metadata = {
  title: "직업 공략 | 와미널",
  description: "월드 오브 워크래프트 한밤 확장팩 13개 직업·39개 전문화 한국어 공략 모음",
};

export default function ClassesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
      <header className="mb-10">
        <h1 className="text-3xl font-bold md:text-4xl">직업 공략</h1>
        <p className="mt-2 text-muted">
          직업을 골라 전문화별 쐐기·레이드·특성·BIS·도핑 정보를 확인하세요.
        </p>
      </header>

      <div className="space-y-4">
        {CLASSES.map((cls) => (
          <article
            key={cls.slug}
            className="rounded-lg border border-border bg-surface p-5 transition-colors hover:bg-surface-2"
          >
            <Link
              href={`/classes/${cls.slug}`}
              className="flex items-baseline gap-3"
            >
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: cls.color }}
              />
              <h2
                className="text-xl font-bold"
                style={{ color: cls.color }}
              >
                {cls.name}
              </h2>
              <span className="text-xs text-muted">
                {cls.specs.length}개 전문화
              </span>
            </Link>
            <div className="mt-3 flex flex-wrap gap-2">
              {cls.specs.map((spec) => (
                <Link
                  key={spec.slug}
                  href={`/classes/${cls.slug}/${spec.slug}`}
                  className="rounded-md border border-border bg-background px-3 py-1.5 text-sm transition-colors hover:border-accent hover:text-accent"
                >
                  {spec.name}
                  <span className="ml-1.5 text-xs text-muted">{spec.role}</span>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
