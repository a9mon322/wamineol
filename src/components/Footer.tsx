export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <p className="font-semibold text-foreground">와미널 (와우정보터미널)</p>
            <p className="mt-1">월드 오브 워크래프트 한밤 확장팩 한국어 공략 사이트</p>
          </div>
          <div className="text-xs">
            <p>© {new Date().getFullYear()} 와미널. 비공식 팬 사이트.</p>
            <p className="mt-1">World of Warcraft® is © Blizzard Entertainment.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
