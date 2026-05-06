export type Spec = {
  slug: string;
  name: string;
  role: "탱커" | "딜러" | "힐러";
};

export type WowClass = {
  slug: string;
  name: string;
  color: string;
  specs: Spec[];
};

export const CLASSES: WowClass[] = [
  {
    slug: "warrior",
    name: "전사",
    color: "#C79C6E",
    specs: [
      { slug: "arms", name: "무기", role: "딜러" },
      { slug: "fury", name: "분노", role: "딜러" },
      { slug: "protection", name: "방어", role: "탱커" },
    ],
  },
  {
    slug: "paladin",
    name: "성기사",
    color: "#F58CBA",
    specs: [
      { slug: "holy", name: "신성", role: "힐러" },
      { slug: "protection", name: "보호", role: "탱커" },
      { slug: "retribution", name: "징벌", role: "딜러" },
    ],
  },
  {
    slug: "hunter",
    name: "사냥꾼",
    color: "#ABD473",
    specs: [
      { slug: "beast-mastery", name: "야수", role: "딜러" },
      { slug: "marksmanship", name: "사격", role: "딜러" },
      { slug: "survival", name: "생존", role: "딜러" },
    ],
  },
  {
    slug: "rogue",
    name: "도적",
    color: "#FFF569",
    specs: [
      { slug: "assassination", name: "암살", role: "딜러" },
      { slug: "outlaw", name: "무법", role: "딜러" },
      { slug: "subtlety", name: "잠행", role: "딜러" },
    ],
  },
  {
    slug: "priest",
    name: "사제",
    color: "#FFFFFF",
    specs: [
      { slug: "discipline", name: "수양", role: "힐러" },
      { slug: "holy", name: "신성", role: "힐러" },
      { slug: "shadow", name: "암흑", role: "딜러" },
    ],
  },
  {
    slug: "shaman",
    name: "주술사",
    color: "#0070DE",
    specs: [
      { slug: "elemental", name: "정기", role: "딜러" },
      { slug: "enhancement", name: "고양", role: "딜러" },
      { slug: "restoration", name: "복원", role: "힐러" },
    ],
  },
  {
    slug: "mage",
    name: "마법사",
    color: "#69CCF0",
    specs: [
      { slug: "arcane", name: "비전", role: "딜러" },
      { slug: "fire", name: "화염", role: "딜러" },
      { slug: "frost", name: "냉기", role: "딜러" },
    ],
  },
  {
    slug: "warlock",
    name: "흑마법사",
    color: "#9482C9",
    specs: [
      { slug: "affliction", name: "고통", role: "딜러" },
      { slug: "demonology", name: "악마", role: "딜러" },
      { slug: "destruction", name: "파괴", role: "딜러" },
    ],
  },
  {
    slug: "monk",
    name: "수도사",
    color: "#00FF96",
    specs: [
      { slug: "brewmaster", name: "양조", role: "탱커" },
      { slug: "mistweaver", name: "운무", role: "힐러" },
      { slug: "windwalker", name: "풍운", role: "딜러" },
    ],
  },
  {
    slug: "druid",
    name: "드루이드",
    color: "#FF7D0A",
    specs: [
      { slug: "balance", name: "조화", role: "딜러" },
      { slug: "feral", name: "야성", role: "딜러" },
      { slug: "guardian", name: "수호", role: "탱커" },
      { slug: "restoration", name: "회복", role: "힐러" },
    ],
  },
  {
    slug: "deathknight",
    name: "죽음의기사",
    color: "#C41F3B",
    specs: [
      { slug: "blood", name: "혈기", role: "탱커" },
      { slug: "frost", name: "냉기", role: "딜러" },
      { slug: "unholy", name: "부정", role: "딜러" },
    ],
  },
  {
    slug: "demonhunter",
    name: "악마사냥꾼",
    color: "#A330C9",
    specs: [
      { slug: "havoc", name: "파멸", role: "딜러" },
      { slug: "vengeance", name: "복수", role: "탱커" },
    ],
  },
  {
    slug: "evoker",
    name: "기원사",
    color: "#33937F",
    specs: [
      { slug: "devastation", name: "황폐", role: "딜러" },
      { slug: "preservation", name: "보존", role: "힐러" },
      { slug: "augmentation", name: "증강", role: "딜러" },
    ],
  },
];

export const SECTIONS = [
  { slug: "mythic-plus", name: "쐐기 던전" },
  { slug: "raid", name: "레이드" },
  { slug: "talents", name: "특성" },
  { slug: "bis", name: "BIS 아이템" },
  { slug: "consumables", name: "마법부여·도핑" },
] as const;

export type SectionSlug = typeof SECTIONS[number]["slug"];

export function getClass(slug: string) {
  return CLASSES.find((c) => c.slug === slug);
}

export function getSpec(classSlug: string, specSlug: string) {
  const cls = getClass(classSlug);
  if (!cls) return undefined;
  return cls.specs.find((s) => s.slug === specSlug);
}
