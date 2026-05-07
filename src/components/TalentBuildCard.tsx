import Link from "next/link";
import type { TalentBuild } from "@/data/talent-builds";
import ImportCodeBlock from "@/components/ImportCodeBlock";

export default function TalentBuildCard({ build }: { build: TalentBuild }) {
  const detailHref = `/classes/${build.classSlug}/${build.specSlug}/builds/${build.sectionSlug}/${build.heroTalentSlug}`;

  return (
    <div
      className="overflow-hidden rounded-lg border bg-surface-2 transition-colors"
      style={{ borderColor: `${build.accentColor}55` }}
    >
      <Link
        href={detailHref}
        className="group block p-5 transition-colors hover:bg-surface"
      >
        <div className="flex items-center gap-2">
          <span
            className="rounded-md px-2 py-1 text-xs font-bold"
            style={{
              backgroundColor: `${build.accentColor}22`,
              color: build.accentColor,
              border: `1px solid ${build.accentColor}66`,
            }}
          >
            영웅특성
          </span>
          <h3
            className="text-xl font-bold"
            style={{ color: build.accentColor }}
          >
            {build.heroTalentName} 빌드
          </h3>
          <span className="ml-auto text-sm text-muted group-hover:text-accent">
            자세히 →
          </span>
        </div>

        {build.description && (
          <p className="mt-3 text-sm text-foreground/80">{build.description}</p>
        )}

        <div className="mt-4">
          {build.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={build.imageUrl}
              alt={`${build.heroTalentName} 빌드 특성 트리`}
              className="w-full rounded-md border border-border bg-background"
            />
          ) : (
            <div className="flex h-40 items-center justify-center rounded-md border border-dashed border-border bg-background text-sm italic text-muted">
              스크린샷 추가 예정
            </div>
          )}
        </div>
      </Link>

      <div className="border-t border-border bg-surface px-5 py-4">
        <div className="mb-1 text-xs text-muted">Import 코드</div>
        <ImportCodeBlock code={build.importCode} />
      </div>
    </div>
  );
}
