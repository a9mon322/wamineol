"use client";

import { useState } from "react";

type LoginResult = { ok: false; error: string } | { ok: true };

export default function LoginForm({
  action,
}: {
  action: (fd: FormData) => Promise<LoginResult>;
}) {
  const [error, setError] = useState<string | null>(null);
  const [pending, setPending] = useState(false);

  return (
    <form
      action={async (fd) => {
        setError(null);
        setPending(true);
        const res = await action(fd);
        setPending(false);
        if (!res.ok) setError(res.error);
      }}
      className="mt-6 space-y-3"
    >
      <input
        name="email"
        type="email"
        placeholder="이메일"
        required
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호"
        required
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-sm focus:border-accent focus:outline-none"
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90 disabled:opacity-50"
      >
        {pending ? "로그인 중..." : "로그인"}
      </button>
    </form>
  );
}
