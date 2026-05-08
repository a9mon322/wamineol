import Link from "next/link";
import {
  CONSUMABLE_CATEGORY_LABELS,
  getConsumableColor,
  getConsumableDisplayName,
  type ConsumableBuild,
  type ConsumableCategory,
} from "@/data/consumables";
import { getWowheadIconUrl } from "@/data/bis-items";

const PREVIEW_CATEGORIES: ConsumableCategory[] = [
  "flask",
  "combat-potion",
  "feast",
  "augment-rune",
];

export default function ConsumableBuildCard({
  build,
  classSlug,
  specSlug,
  classColor,
}: {
  build: ConsumableBuild;
  classSlug: string;
  specSlug: string;
  classColor: string;
}) {
  const detailHref = `/classes/${classSlug}/${specSlug}/consumables`;
  const categoryMap = new Map(build.items.map((i) => [i.category, i]));

  return (
    <Link
      href={detailHref}
      className="group block overflow-hidden rounded-lg border bg-surface-2 transition-colors hover:bg-surface"
      style={{ borderColor: `${classColor}55` }}
    >
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span
            className="rounded-md px-2 py-1 text-xs font-bold"
            style={{
              backgroundColor: `${classColor}22`,
              color: classColor,
              border: `1px solid ${classColor}66`,
            }}
          >
            도핑
          </span>
          <h3 className="text-xl font-bold" style={{ color: classColor }}>
            도핑 추천
          </h3>
          {build.patchVersion && (
            <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
              패치 {build.patchVersion}
            </span>
          )}
          <span className="ml-auto text-sm text-muted group-hover:text-accent">
            자세히 →
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4">
          {PREVIEW_CATEGORIES.map((category) => {
            const item = categoryMap.get(category);
            const iconUrl = item ? getWowheadIconUrl(item.iconName, "medium") : null;
            return (
              <div
                key={category}
                className="flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2"
              >
                {iconUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={iconUrl}
                    alt=""
                    width={36}
                    height={36}
                    className="h-9 w-9 flex-shrink-0 rounded border border-border"
                  />
                ) : (
                  <div className="h-9 w-9 flex-shrink-0 rounded border border-dashed border-border" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="text-xs text-muted">
                    {CONSUMABLE_CATEGORY_LABELS[category]}
                  </div>
                  <div
                    className="truncate text-sm font-semibold"
                    style={item ? { color: getConsumableColor(item) } : undefined}
                  >
                    {item ? getConsumableDisplayName(item) : "-"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-3 flex flex-wrap gap-2 text-xs text-muted">
          <span>총 {build.items.length}종 추천</span>
        </div>
      </div>
    </Link>
  );
}
