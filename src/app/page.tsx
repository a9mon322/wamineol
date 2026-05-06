import Link from "next/link";
import { CLASSES } from "@/data/classes";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-16">
      {/* 히어로 */}
      <section className="text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          World of Warcraft · Midnight
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
          한밤 확장팩
          <br />
          <span className="text-accent glow-text">한국어 공략 터미널</span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
          영어가 어려워서 와우헤드 보기 힘들었던 한국 와우 유저를 위한
          간단·정확한 정보 모음. 직업별 쐐기·레이드·BIS·마부·도핑까지.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/classes"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            직업별 공략 보기
          </Link>
          <Link
            href="/board"
            className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            자유게시판
          </Link>
        </div>
      </section>

      {/* 직업 그리드 */}
      <section className="mt-20">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">직업 빠른 진입</h2>
          <Link
            href="/classes"
            className="text-sm text-muted hover:text-accent"
          >
            전체 보기 →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {CLASSES.map((cls) => (
            <Link
              key={cls.slug}
              href={`/classes/${cls.slug}`}
              className="group rounded-lg border border-border bg-surface p-4 transition-all hover:border-accent hover:bg-surface-2"
            >
              <div
                className="h-1 w-8 rounded-full transition-all group-hover:w-12"
                style={{ backgroundColor: cls.color }}
              />
              <p
                className="mt-3 font-semibold"
                style={{ color: cls.color }}
              >
                {cls.name}
              </p>
              <p className="mt-1 text-xs text-muted">
                {cls.specs.length}개 전문화
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* 안내 */}
      <section className="mt-20 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-3xl">📚</p>
          <h3 className="mt-2 font-bold">직업별 공략</h3>
          <p className="mt-1 text-sm text-muted">
            13개 직업, 39개 전문화의 쐐기·레이드·특성·BIS·도핑까지 한 곳에서.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-3xl">💬</p>
          <h3 className="mt-2 font-bold">자유 게시판</h3>
          <p className="mt-1 text-sm text-muted">
            로그인 없이 익명으로 자유롭게 의견 교환. 닉네임만 정해주세요.
          </p>
        </div>
        <div className="rounded-lg border border-border bg-surface p-6">
          <p className="text-3xl">🛠️</p>
          <h3 className="mt-2 font-bold">최신 정보</h3>
          <p className="mt-1 text-sm text-muted">
            패치마다 빠르게 업데이트. 다른 게임/유용 사이트도 함께 소개.
          </p>
        </div>
      </section>
    </div>
  );
}
