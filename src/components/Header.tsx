import Link from "next/link";

const NAV = [
  { href: "/classes", label: "직업 공략" },
  { href: "/board", label: "자유게시판" },
  { href: "/info", label: "기타 정보" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-accent glow-text">
            와미널
          </span>
          <span className="hidden text-xs text-muted sm:inline">
            와우정보터미널
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-surface hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
