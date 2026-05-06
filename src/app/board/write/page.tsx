import Link from "next/link";
import { createPost } from "../actions";

export const metadata = {
  title: "글쓰기 | 와미널 자유게시판",
};

export default function WritePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 md:px-6">
      <nav className="mb-6 text-sm text-muted">
        <Link href="/board" className="hover:text-accent">
          ← 게시판으로
        </Link>
      </nav>

      <h1 className="text-3xl font-bold">글쓰기</h1>

      <form action={createPost} className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Field
            label="닉네임"
            name="nickname"
            placeholder="와우 닉네임"
            maxLength={20}
            required
          />
          <Field
            label="비밀번호"
            name="password"
            type="password"
            placeholder="삭제·수정 시 필요 (4자 이상)"
            minLength={4}
            required
          />
        </div>

        <Field
          label="제목"
          name="title"
          placeholder="제목을 입력하세요"
          maxLength={100}
          required
        />

        <div>
          <label className="mb-1 block text-sm font-medium text-muted">
            본문
          </label>
          <textarea
            name="content"
            required
            rows={14}
            maxLength={10000}
            placeholder="내용을 입력하세요"
            className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Link
            href="/board"
            className="rounded-md border border-border px-4 py-2 text-sm hover:bg-surface"
          >
            취소
          </Link>
          <button
            type="submit"
            className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-background hover:opacity-90"
          >
            등록
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-muted">
        {label}
      </label>
      <input
        type={type}
        name={name}
        {...rest}
        className="w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
      />
    </div>
  );
}
