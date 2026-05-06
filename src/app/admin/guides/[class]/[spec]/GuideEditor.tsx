"use client";

import { useState } from "react";
import { saveGuide } from "./actions";

export default function GuideEditor({
  classSlug,
  specSlug,
  sectionSlug,
  sectionName,
  initialContent,
}: {
  classSlug: string;
  specSlug: string;
  sectionSlug: string;
  sectionName: string;
  initialContent: string;
}) {
  const [content, setContent] = useState(initialContent);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  return (
    <section className="rounded-lg border border-border bg-surface p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-accent">{sectionName}</h2>
        <div className="text-xs text-muted">
          {status === "saving" && "저장 중..."}
          {status === "saved" && <span className="text-green-400">저장됨 ✓</span>}
          {status === "error" && <span className="text-red-400">오류</span>}
        </div>
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={10}
        placeholder={`${sectionName} 공략 내용을 입력하세요. 줄바꿈 그대로 표시됩니다.`}
        className="mt-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />

      {error && <p className="mt-1 text-xs text-red-400">{error}</p>}

      <div className="mt-3 flex justify-end">
        <button
          type="button"
          onClick={async () => {
            setStatus("saving");
            setError(null);
            const res = await saveGuide({
              classSlug,
              specSlug,
              sectionSlug,
              content,
            });
            if (res.ok) {
              setStatus("saved");
              setTimeout(() => setStatus("idle"), 2000);
            } else {
              setStatus("error");
              setError(res.error);
            }
          }}
          disabled={status === "saving"}
          className="rounded-md bg-accent px-4 py-1.5 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
        >
          저장
        </button>
      </div>
    </section>
  );
}
