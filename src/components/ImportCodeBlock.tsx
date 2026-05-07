"use client";

import { useState, type MouseEvent } from "react";

export default function ImportCodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function copy(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex items-stretch gap-2">
      <code className="flex-1 break-all rounded-md border border-border bg-background px-3 py-2 font-mono text-xs leading-relaxed">
        {code}
      </code>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 rounded-md border border-border bg-surface px-3 text-xs font-bold hover:border-accent hover:text-accent"
      >
        {copied ? "복사됨" : "복사"}
      </button>
    </div>
  );
}
