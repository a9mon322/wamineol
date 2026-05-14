// 와우 한밤 시즌 전문화별 2차 스탯 우선순위.
// 와우헤드 가이드의 stat priority 페이지를 기반으로 작성.
// 영웅특성별로 우선순위가 갈리면 builds에 여러 항목, 동일하면 1개.

export type StatName =
  | "힘"
  | "민첩"
  | "지능"
  | "치명"
  | "가속"
  | "특화"
  | "유연"
  | "무기 피해";

export const STAT_COLORS: Record<StatName, string> = {
  "힘": "#C79C6E",
  "민첩": "#ABD473",
  "지능": "#69CCF0",
  "치명": "#F39C12",
  "가속": "#FF7D0A",
  "특화": "#A330C9",
  "유연": "#33937F",
  "무기 피해": "#B0B0B0",
};

export type StatPriorityBuild = {
  heroTalentSlug?: string;
  heroTalentName?: string;
  priority: StatName[];
  note?: string;
};

export type StatPriority = {
  classSlug: string;
  specSlug: string;
  patchVersion?: string;
  builds: StatPriorityBuild[];
};

export const STAT_PRIORITIES: StatPriority[] = [
  // ── 전사 ────────────────────────────
  {
    classSlug: "warrior", specSlug: "arms", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "치명", "가속", "특화", "유연"], note: "거신·학살자 동일. 치명·가속은 자주 자리가 바뀜." }],
  },
  {
    classSlug: "warrior", specSlug: "fury", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "가속", "특화", "치명", "유연"], note: "산왕·학살자 동일." }],
  },
  {
    classSlug: "warrior", specSlug: "protection", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "가속", "치명", "유연", "특화"] }],
  },
  // ── 성기사 ────────────────────────────
  {
    classSlug: "paladin", specSlug: "holy", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "특화", "치명", "유연"] }],
  },
  {
    classSlug: "paladin", specSlug: "protection", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "가속", "유연", "특화", "치명"] }],
  },
  {
    classSlug: "paladin", specSlug: "retribution", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "특화", "치명", "가속", "유연"] }],
  },
  // ── 사냥꾼 ────────────────────────────
  {
    classSlug: "hunter", specSlug: "beast-mastery", patchVersion: "12.0.5",
    builds: [{ priority: ["무기 피해", "민첩", "특화", "가속", "치명", "유연"], note: "단일 기준. 광역에선 가속이 치명 뒤로." }],
  },
  {
    classSlug: "hunter", specSlug: "marksmanship", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "치명", "특화", "유연", "가속"] }],
  },
  {
    classSlug: "hunter", specSlug: "survival", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "특화", "치명", "유연"] }],
  },
  // ── 도적 ────────────────────────────
  {
    classSlug: "rogue", specSlug: "assassination", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "치명", "가속", "특화", "유연"] }],
  },
  {
    classSlug: "rogue", specSlug: "outlaw", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "가속", "치명", "유연", "특화"] }],
  },
  {
    classSlug: "rogue", specSlug: "subtlety", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "특화", "가속", "치명", "유연"] }],
  },
  // ── 사제 ────────────────────────────
  {
    classSlug: "priest", specSlug: "discipline", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "가속", "치명", "특화", "유연"], note: "예언자·공허술사 동일. 광역에선 특화·유연 자리 교체." }],
  },
  {
    classSlug: "priest", specSlug: "holy", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "치명", "특화", "가속"], note: "집정관·예언자 동일. 광역에선 유연이 치명 뒤로 들어옴." }],
  },
  {
    classSlug: "priest", specSlug: "shadow", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "가속", "특화", "치명", "유연"] }],
  },
  // ── 주술사 ────────────────────────────
  {
    classSlug: "shaman", specSlug: "elemental", patchVersion: "12.0.5",
    builds: [{ priority: ["특화", "가속", "치명", "유연"], note: "특화 1200 레이팅까지 최우선. 가속·치명 동급. 지능은 1차 스탯이라 자동 상승." }],
  },
  {
    classSlug: "shaman", specSlug: "enhancement", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "가속", "치명", "유연"] }],
  },
  {
    classSlug: "shaman", specSlug: "restoration", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "치명", "특화", "가속"] }],
  },
  // ── 마법사 ────────────────────────────
  {
    classSlug: "mage", specSlug: "arcane", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "특화", "가속", "치명", "유연"] }],
  },
  {
    classSlug: "mage", specSlug: "fire", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "가속", "특화", "유연", "치명"] }],
  },
  {
    classSlug: "mage", specSlug: "frost", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "특화", "치명", "가속", "유연"] }],
  },
  // ── 흑마법사 ────────────────────────────
  {
    classSlug: "warlock", specSlug: "affliction", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "치명", "가속", "유연", "특화"] }],
  },
  {
    classSlug: "warlock", specSlug: "demonology", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "치명", "특화", "유연", "가속"] }],
  },
  {
    classSlug: "warlock", specSlug: "destruction", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "가속", "치명", "유연", "특화"] }],
  },
  // ── 수도사 ────────────────────────────
  {
    classSlug: "monk", specSlug: "brewmaster", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "치명", "가속", "특화", "유연"] }],
  },
  {
    classSlug: "monk", specSlug: "mistweaver", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "가속", "치명", "유연", "특화"] }],
  },
  {
    classSlug: "monk", specSlug: "windwalker", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "가속", "치명", "특화", "유연"] }],
  },
  // ── 드루이드 ────────────────────────────
  {
    classSlug: "druid", specSlug: "balance", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "특화", "치명", "유연", "가속"] }],
  },
  {
    classSlug: "druid", specSlug: "feral", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "특화", "가속", "치명", "유연"] }],
  },
  {
    classSlug: "druid", specSlug: "guardian", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "가속", "유연", "치명", "특화"] }],
  },
  {
    classSlug: "druid", specSlug: "restoration", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "가속", "특화", "유연", "치명"] }],
  },
  // ── 죽음의기사 ────────────────────────────
  {
    classSlug: "deathknight", specSlug: "blood", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "가속", "특화", "치명", "유연"], note: "단일 기준. 특화·치명·유연 동급. 광역에선 치명이 더 우선." }],
  },
  {
    classSlug: "deathknight", specSlug: "frost", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "치명", "특화", "가속", "유연"] }],
  },
  {
    classSlug: "deathknight", specSlug: "unholy", patchVersion: "12.0.5",
    builds: [{ priority: ["힘", "특화", "치명", "가속", "유연"], note: "산레인·종말의 기수 동일." }],
  },
  // ── 악마사냥꾼 ────────────────────────────
  {
    classSlug: "demonhunter", specSlug: "havoc", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "치명", "특화", "가속", "유연"] }],
  },
  {
    classSlug: "demonhunter", specSlug: "vengeance", patchVersion: "12.0.5",
    builds: [{ priority: ["민첩", "가속", "치명", "유연", "특화"] }],
  },
  {
    classSlug: "demonhunter", specSlug: "predation", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "특화", "가속", "치명", "유연"] }],
  },
  // ── 기원사 ────────────────────────────
  {
    classSlug: "evoker", specSlug: "devastation", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "치명", "가속", "특화", "유연"] }],
  },
  {
    classSlug: "evoker", specSlug: "preservation", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "특화", "치명", "가속", "유연"] }],
  },
  {
    classSlug: "evoker", specSlug: "augmentation", patchVersion: "12.0.5",
    builds: [{ priority: ["지능", "치명", "가속", "특화", "유연"] }],
  },
];

export function getStatPriority(classSlug: string, specSlug: string) {
  return STAT_PRIORITIES.find(
    (p) => p.classSlug === classSlug && p.specSlug === specSlug
  );
}
