import Link from "next/link";
import { notFound } from "next/navigation";
import { getClass, getSpec } from "@/data/classes";
import {
  ENCHANT_BUILDS,
  ENCHANT_SLOT_LABELS,
  ENCHANT_SLOT_ORDER,
  getEnchantBuild,
  getEnchantColor,
  getEnchantDisplayName,
  getWowheadEnchantUrl,
} from "@/data/enchants";
import { getWowheadIconUrl } from "@/data/bis-items";

export function generateStaticParams() {
  return ENCHANT_BUILDS.map((b) => ({
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
  const build = getEnchantBuild(classSlug, specSlug);
  if (!cls || !spec || !build) return {};
  return {
    title: `${cls.name} ${spec.name} 마법부여 추천 | 와미널`,
    description: `${cls.name} ${spec.name} 한밤 시즌 마법부여 추천 - 부위별 추천 마부 정리`,
  };
}

export default async function EnchantsDetailPage({
  params,
}: {
  params: Promise<{ class: string; spec: string }>;
}) {
  const { class: classSlug, spec: specSlug } = await params;
  const cls = getClass(classSlug);
  const spec = getSpec(classSlug, specSlug);
  if (!cls || !spec) notFound();

  const build = getEnchantBuild(classSlug, specSlug);
  if (!build) notFound();

  const slotMap = new Map(build.items.map((i) => [i.slot, i]));
  const orderedItems = ENCHANT_SLOT_ORDER.map((slot) => ({
    slot,
    item: slotMap.get(slot),
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
        <span className="text-foreground">마법부여 상세</span>
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
            마부
          </span>
          <h1 className="text-3xl font-bold md:text-4xl">
            <span style={{ color: cls.color }}>{cls.name}</span>{" "}
            <span className="text-foreground">{spec.name}</span>{" "}
            <span className="text-foreground">마법부여 추천</span>
          </h1>
          {build.patchVersion && (
            <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted">
              패치 {build.patchVersion}
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted">
          한밤 시즌 {cls.name} {spec.name} 부위별 추천 마법부여
        </p>
      </header>

      <section className="mb-10 rounded-lg border border-border bg-surface p-6">
        <h2 className="mb-4 text-lg font-bold text-accent">부위별 추천 마법부여</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wide text-muted">
                <th className="px-3 py-2 w-24">슬롯</th>
                <th className="px-3 py-2 w-12"></th>
                <th className="px-3 py-2">마법부여</th>
                <th className="px-3 py-2">메모</th>
              </tr>
            </thead>
            <tbody>
              {orderedItems.map(({ slot, item }) => {
                if (!item) return null;
                const iconUrl = getWowheadIconUrl(item.iconName, "medium");
                return (
                  <tr
                    key={slot}
                    className="border-b border-border/40 hover:bg-surface-2"
                  >
                    <td className="px-3 py-3 align-top text-muted">
                      {ENCHANT_SLOT_LABELS[slot]}
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
                        href={getWowheadEnchantUrl(item)}
                        target="_blank"
                        rel="noreferrer"
                        className="font-semibold hover:underline"
                        style={{ color: getEnchantColor(item) }}
                      >
                        {getEnchantDisplayName(item)}
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
