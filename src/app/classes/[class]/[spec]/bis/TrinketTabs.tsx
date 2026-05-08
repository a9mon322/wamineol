"use client";

import { useState } from "react";
import {
  getBisItemColor,
  getBisItemDisplayName,
  getBisSourceDisplay,
  getWowheadIconUrl,
  getWowheadItemUrl,
  type BisContentType,
  type BisTrinket,
} from "@/data/bis-items";

const TIER_STYLE: Record<NonNullable<BisTrinket["tier"]>, string> = {
  S: "bg-amber-500/10 text-amber-300 border-amber-400/40",
  A: "bg-sky-500/10 text-sky-300 border-sky-400/40",
  B: "bg-zinc-500/10 text-zinc-300 border-zinc-400/40",
};

export default function TrinketTabs({
  trinkets,
  classColor,
}: {
  trinkets: BisTrinket[];
  classColor: string;
}) {
  const [tab, setTab] = useState<BisContentType>("mythic-plus");
  const filtered = trinkets.filter((t) => t.contentType === tab);

  const tabs: { value: BisContentType; label: string; count: number }[] = [
    {
      value: "mythic-plus",
      label: "쐐기 / 신화+",
      count: trinkets.filter((t) => t.contentType === "mythic-plus").length,
    },
    {
      value: "raid",
      label: "레이드",
      count: trinkets.filter((t) => t.contentType === "raid").length,
    },
  ];

  return (
    <div>
      <div className="flex gap-2 border-b border-border">
        {tabs.map((t) => {
          const active = tab === t.value;
          return (
            <button
              key={t.value}
              type="button"
              onClick={() => setTab(t.value)}
              className="-mb-px border-b-2 px-4 py-2 text-sm font-semibold transition-colors"
              style={{
                borderColor: active ? classColor : "transparent",
                color: active ? classColor : undefined,
              }}
            >
              {t.label}
              <span className="ml-1.5 text-xs text-muted">({t.count})</span>
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 italic text-muted">추천 장신구가 아직 없습니다.</p>
      ) : (
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {filtered.map((trinket) => {
            const iconUrl = getWowheadIconUrl(trinket.iconName, "medium");
            return (
              <a
                key={`${trinket.contentType}-${trinket.itemName}`}
                href={getWowheadItemUrl(trinket)}
                target="_blank"
                rel="noreferrer"
                className="group flex gap-3 rounded-md border border-border bg-background p-4 transition-colors hover:border-accent"
              >
                {iconUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={iconUrl}
                    alt=""
                    width={48}
                    height={48}
                    className="h-12 w-12 flex-shrink-0 rounded border border-border"
                  />
                ) : (
                  <div className="h-12 w-12 flex-shrink-0 rounded border border-dashed border-border" />
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    {trinket.tier && (
                      <span
                        className={`rounded-md border px-2 py-0.5 text-xs font-bold ${TIER_STYLE[trinket.tier]}`}
                      >
                        {trinket.tier}
                      </span>
                    )}
                    <div
                      className="truncate font-semibold"
                      style={{ color: getBisItemColor(trinket) }}
                    >
                      {getBisItemDisplayName(trinket)}
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-muted">
                    {getBisSourceDisplay(trinket)}
                  </div>
                  {trinket.note && (
                    <div className="mt-1 text-xs text-foreground/70">
                      {trinket.note}
                    </div>
                  )}
                </div>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
