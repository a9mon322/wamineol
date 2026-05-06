import Link from "next/link";
import WriteForm from "./WriteForm";

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

      <WriteForm />
    </div>
  );
}
