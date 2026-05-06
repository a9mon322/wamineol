"use client";

import Link from "next/link";
import { useState } from "react";
import { createInfoPost } from "../actions";

export default function NewInfoForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <form
      action={async (fd) => {
        setError(null);
        setPending(true);
        const res = await createInfoPost(fd);
        setPending(false);
        if (res && !res.ok) setError(res.error);
      }}
      className="mt-6 space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm text-muted">카테고리</label>
          <input
            name="category"
            defaultValue="general"
            placeholder="예: game, site, news, general"
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-muted">제목</label>
        <input
          name="title"
          required
          className="w-full rounded-md border border-border bg-surface px-3 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-muted">본문</label>
        <textarea
          name="content"
          required
          rows={16}
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}

      <div className="flex justify-end gap-2">
        <Link
          href="/admin/info"
          className="rounded-md border border-border px-4 py-2 text-sm hover:bg-surface"
        >
          취소
        </Link>
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "등록 중..." : "등록"}
        </button>
      </div>
    </form>
  );
}
