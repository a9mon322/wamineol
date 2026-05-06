import Link from "next/link";
import { login } from "./actions";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "관리자 로그인 | 와미널",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col justify-center px-4 py-10 md:px-6">
      <h1 className="text-2xl font-bold">관리자 로그인</h1>
      <p className="mt-1 text-sm text-muted">
        와미널 운영자만 사용. 일반 유저는{" "}
        <Link href="/board" className="text-accent hover:underline">
          게시판
        </Link>
        으로.
      </p>

      <LoginForm action={login} />
    </div>
  );
}
