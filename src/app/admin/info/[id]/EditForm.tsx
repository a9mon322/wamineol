"use client";

import Link from "next/link";
import { useState } from "react";
import { updateInfoPost, deleteInfoPost } from "../actions";

type InfoPost = {
  id: number;
  title: string;
  content: string;
  category: string;
};

export default function EditForm({ post }: { post: InfoPost }) {
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      action={async (fd) => {
        setStatus("saving");
        setError(null);
        const res = await updateInfoPost(post.id, fd);
        if (res.ok) {
          setStatus("saved");
          setTimeout(() => setStatus("idle"), 2000);
        } else {
          setStatus("error");
          setError(res.error);
        }
      }}
      className="mt-6 space-y-4"
    >
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="mb-1 block text-sm text-muted">카테고리</label>
          <input
            name="category"
            defaultValue={post.category}
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm text-muted">제목</label>
        <input
          name="title"
          defaultValue={post.title}
          required
          className="w-full rounded-md border border-border bg-surface px-3 py-2 focus:border-accent focus:outline-none"
        />
      </div>

      <div>
        <label className="mb-1 block text-sm text-muted">본문</label>
        <textarea
          name="content"
          defaultValue={post.content}
          required
          rows={16}
          className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}

      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={async () => {
            if (!confirm("정말 삭제하시겠어요?")) return;
            await deleteInfoPost(post.id);
          }}
          className="text-xs text-red-400 hover:underline"
        >
          삭제
        </button>
        <div className="flex items-center gap-3">
          {status === "saved" && (
            <span className="text-xs text-green-400">저장됨 ✓</span>
          )}
          <Link
            href={`/info/${post.id}`}
            className="rounded-md border border-border px-4 py-2 text-sm hover:bg-surface"
          >
            게시글 보기
          </Link>
          <button
            type="submit"
            disabled={status === "saving"}
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
          >
            {status === "saving" ? "저장 중..." : "저장"}
          </button>
        </div>
      </div>
    </form>
  );
}
