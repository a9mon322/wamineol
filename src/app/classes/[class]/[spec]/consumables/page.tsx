import Link from "next/link";
import { notFound } from "next/navigation";
import { getClass, getSpec } from "@/data/classes";
import {
  CONSUMABLE_BUILDS,
  CONSUMABLE_CATEGORY_LABELS,
  CONSUMABLE_CATEGORY_ORDER,
  getConsumableBuild,
  getConsumableColor,
  getConsumableDisplayName,
  getWowheadConsumableUrl,
} from "@/data/consumables";
import { getWowheadIconUrl } from "@/data/bis-items";

export function generateStaticParams() {
  return CONSUMABLE_BUILDS.map((b) => ({
    class: b.classSlug,
    spec: b.specSlug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ class: string; spec: string }>;
}) {
  const { class: classSlug, spec: specSlug } = await params;
  const cls = getClass(classSlug);
  const spec = getSpec(classSlug, specSlug);
  const build = getConsumableBuild(classSlug, specSlug);
  if (!cls || !spec || !build) return {};
  return {
    title: `${cls.name} ${spec.name} 도핑 추천 | 와미널`,
    description: `${cls.name} ${spec.name} 한밤 시즌 도핑 추천 - 플라스크/물약/음식/룬 정리`,
  };
}

export default async function ConsumablesDetailPage({
  params,
}: {
  params: Promise<{ class: string; spec: string }>;
}) {
  const { class: classSlug, spec: specSlug } = await params;
  const cls = getClass(classSlug);
  const spec = getSpec(classSlug, specSlug);
  if (!cls || !spec) notFound();

  const build = getConsumableBuild(classSlug, specSlug);
  if (!build) notFound();

  const categoryMap = new Map(build.items.map((i) => [i.category, i]));
  const orderedItems = CONSUMABLE_CATEGORY_ORDER.map((category) => ({
    category,
    item: categoryMap.get(category),
  })).filter((row) => row.item);

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
        <Link
          href={`/classes/${cls.slug}/${spec.slug}#consumables`}
          className="hover:text-accent"
        >
          {spec.name} 마법부여·도핑
        </Link>
        {" / "}
        <span className="text-foreground">도핑 상세</span>
      </nav>

      <header className="mb-8 border-b border-border pb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className="rounded-md px-2 py-1 text-xs font-bold"
            style={{
              backgroundColor: `${cls.color}22`,
              color: cls.color,
              border: `1px solid ${cls.color}66`,
            }}
          >
            도핑
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">
            <span style={{ color: cls.color }}>{cls.name}</span>{" "}
            <span className="text-foreground">{spec.name}</span>{" "}
            <span className="text-foreground">도핑 추천</span>
          </h1>
          {build.patchVersion && (
            <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
              패치 {build.patchVersion}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted">
          한밤 시즌 {cls.name} {spec.name} 추천 도핑 (플라스크/물약/음식/룬)
        </p>
      </header>

      <section className="mb-10 rounded-lg border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-bold text-accent">카테고리별 추천</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted">
                <th className="px-3 py-2 w-32">카테고리</th>
                <th className="px-3 py-2 w-12"></th>
                <th className="px-3 py-2">아이템</th>
                <th className="px-3 py-2">메모</th>
              </tr>
            </thead>
            <tbody>
              {orderedItems.map(({ category, item }) => {
                if (!item) return null;
                const iconUrl = getWowheadIconUrl(item.iconName, "medium");
                return (
                  <tr
                    key={category}
                    className="border-b border-border/40 hover:bg-surface-2"
                  >
                    <td className="px-3 py-3 align-top text-muted">
                      {CONSUMABLE_CATEGORY_LABELS[category]}
                    </td>
                    <td className="px-3 py-3 align-top">
                      {iconUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={iconUrl}
                          alt=""
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded border border-border"
                        />
                      ) : (
                        <div className="h-10 w-10 rounded border border-dashed border-border" />
                      )}
                    </td>
                    <td className="px-3 py-3 align-top">
                      <a
                        href={getWowheadConsumableUrl(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:underline"
                        style={{ color: getConsumableColor(item) }}
                      >
                        {getConsumableDisplayName(item)}
                      </a>
                    </td>
                    <td className="px-3 py-3 align-top text-foreground/80">
                      {item.note ?? ""}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <Link
        href={`/classes/${cls.slug}/${spec.slug}#consumables`}
        className="inline-block rounded-md border border-border bg-surface px-4 py-2 text-sm hover:border-accent hover:text-accent"
      >
        ← {spec.name} 페이지로
      </Link>
    </div>
  );
}
