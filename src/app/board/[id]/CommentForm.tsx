"use client";

import { useRef, useState } from "react";
import { createComment } from "../actions";

export default function CommentForm({ postId }: { postId: number }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <form
      ref={formRef}
      action={async (fd) => {
        setError(null);
        setPending(true);
        const res = await createComment(fd);
        setPending(false);
        if (!res.ok) {
          setError(res.error);
        } else {
          formRef.current?.reset();
        }
      }}
      className="mt-6 rounded-md border border-border bg-surface p-4"
    >
      <input type="hidden" name="post_id" value={postId} />
      <div className="grid grid-cols-2 gap-3">
        <input
          name="nickname"
          placeholder="닉네임"
          maxLength={20}
          required
          className="rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />
        <input
          name="password"
          type="password"
          placeholder="비밀번호 (4자 이상)"
          minLength={4}
          required
          className="rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
        />
      </div>
      <textarea
        name="content"
        placeholder="댓글을 입력하세요"
        maxLength={1000}
        required
        rows={3}
        className="mt-3 w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
      {error && (
        <p className="mt-2 text-xs text-red-400">{error}</p>
      )}
      <div className="mt-3 flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
        >
          {pending ? "등록 중..." : "댓글 등록"}
        </button>
      </div>
    </form>
  );
}
