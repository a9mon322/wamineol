"use client";

import Link from "next/link";
import { useState } from "react";
import { createPost } from "../actions";

export default function WriteForm() {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <form
      action={async (fd) => {
        setError(null);
        setPending(true);
        const res = await createPost(fd);
        setPending(false);
        if (res && !res.ok) setError(res.error);
      }}
      className="mt-6 space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            닉네임
          </label>
          <input
            name="nickname"
            placeholder="와우 닉네임"
            maxLength={20}
            required
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            비밀번호
          </label>
          <input
            type="password"
            name="password"
            placeholder="삭제·수정 시 필요 (4자 이상)"
            minLength={4}
            required
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-muted">제목</label>
        <input
          name="title"
          placeholder="제목을 입력하세요"
          maxLength={100}
          required
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium text-muted">본문</label>
        <textarea
          name="content"
          required
          rows={14}
          maxLength={10000}
          placeholder="내용을 입력하세요"
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}

      <div className="flex justify-end gap-2 pt-2">
        <Link
          href="/board"
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
