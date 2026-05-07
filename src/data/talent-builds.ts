export type TalentBuildSection = "mythic-plus" | "raid";

export type TalentBuild = {
  classSlug: string;
  specSlug: string;
  sectionSlug: TalentBuildSection;
  heroTalentSlug: string;
  heroTalentName: string;
  accentColor: string;
  description: string;
  importCode: string;
  imageUrl?: string;
};

export const TALENT_BUILDS: TalentBuild[] = [
  // ── 전사 / 무기 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "arms",
    sectionSlug: "mythic-plus",
    heroTalentSlug: "colossus",
    heroTalentName: "거신",
    accentColor: "#C8A45C",
    description: "",
    importCode:
      "CcEAAAAAAAAAAAAAAAAAAAAAAgZmxsMzMzYGAAAghphZGmxyMzMzwMmZAAAAAM2MDIzA2MjhFYgZYjGDWAzMMWGjZzsNYmBAYMMA",
    imageUrl: "/talent-builds/전사-무기-거신-쐐기.png",
  },
  {
    classSlug: "warrior",
    specSlug: "arms",
    sectionSlug: "mythic-plus",
    heroTalentSlug: "slayer",
    heroTalentName: "학살자",
    accentColor: "#DC143C",
    description: "",
    importCode:
      "CcEAAAAAAAAAAAAAAAAAAAAAAgZmZmFzYmZGAAAghphZYmZbZmZmZMzYmBAAAAwYxMgMGLbDsAGwMMBmBbgZGGGjZbmtBYmBAmhB",
    imageUrl: "/talent-builds/전사-무기-학살자-쐐기.png",
  },
  {
    classSlug: "warrior",
    specSlug: "arms",
    sectionSlug: "raid",
    heroTalentSlug: "colossus",
    heroTalentName: "거신",
    accentColor: "#C8A45C",
    description: "",
    importCode:
      "CcEAAAAAAAAAAAAAAAAAAAAAAgZmxsMzMzYGAAAghphxwMbLzMzMjZGzMAAAAAGbmB2iBsZGDLwAzwGNGsAmZYYwsZ2GMzAAMzwA",
    imageUrl: "/talent-builds/전사-무기-거신-레이드.png",
  },
  {
    classSlug: "warrior",
    specSlug: "arms",
    sectionSlug: "raid",
    heroTalentSlug: "slayer",
    heroTalentName: "학살자",
    accentColor: "#DC143C",
    description: "",
    importCode:
      "CcEAAAAAAAAAAAAAAAAAAAAAAAzMzsMzYmZAAAAMMNMzYmxyMzMzgxMDAAAAgZWmZgtMGLLDsAGwMMBmBbAzgZbMYmtBYmBgZMMA",
    imageUrl: "/talent-builds/전사-무기-학살자-레이드.png",
  },

  // ── 전사 / 분노 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "fury",
    sectionSlug: "mythic-plus",
    heroTalentSlug: "mountain-thane",
    heroTalentName: "산왕",
    accentColor: "#6896C2",
    description: "",
    importCode:
      "CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDDjZ2WmZmZmxMmZMjZmZWmZGjxsMmZGAAIMwGssZ0YGAzCmxCgZwYAwMDghZmZGGM",
    imageUrl: "/talent-builds/전사-분노-산왕-쐐기.png",
  },
  {
    classSlug: "warrior",
    specSlug: "fury",
    sectionSlug: "mythic-plus",
    heroTalentSlug: "slayer",
    heroTalentName: "학살자",
    accentColor: "#DC143C",
    description: "",
    importCode:
      "CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDjhZ2WmZmZmZmxMjZMzMzyMzYMzsNmHYGAAIGLLDsAGwMMBmhNAzgxAAgZGDzMzMMYA",
    imageUrl: "/talent-builds/전사-분노-학살자-쐐기.png",
  },
  {
    classSlug: "warrior",
    specSlug: "fury",
    sectionSlug: "raid",
    heroTalentSlug: "mountain-thane",
    heroTalentName: "산왕",
    accentColor: "#6896C2",
    description: "",
    importCode:
      "CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDDzMz2yMzMzMMmZMjZMzyMzYMzsMmZGAAIMwGssY0YGAzCmxCgZwYAwMDghZmZGGM",
    imageUrl: "/talent-builds/전사-분노-산왕-레이드.png",
  },
  {
    classSlug: "warrior",
    specSlug: "fury",
    sectionSlug: "raid",
    heroTalentSlug: "slayer",
    heroTalentName: "학살자",
    accentColor: "#DC143C",
    description: "",
    importCode:
      "CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDjxMsMzMzMDjZGzYGzsMzMzYmZbMzMAAQMWWGYBMgZYCMDbAzMbMbDAAmZMMmZGGM",
    imageUrl: "/talent-builds/전사-분노-학살자-레이드.png",
  },

  // ── 전사 / 방어 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "protection",
    sectionSlug: "mythic-plus",
    heroTalentSlug: "colossus",
    heroTalentName: "거신",
    accentColor: "#C8A45C",
    description: "",
    importCode:
      "CkEAAAAAAAAAAAAAAAAAAAAAA0yAAAzMDzMzMDzmZmlZMGjGGzYZmZmZYGzMAAAAYZGAGDAsZGDbwAzwCNmZBzMmZYsNAAzMAADYA",
    imageUrl: "/talent-builds/전사-방어-거신-쐐기.png",
  },
  {
    classSlug: "warrior",
    specSlug: "protection",
    sectionSlug: "mythic-plus",
    heroTalentSlug: "mountain-thane",
    heroTalentName: "산왕",
    accentColor: "#6896C2",
    description: "",
    importCode:
      "CkEAAAAAAAAAAAAAAAAAAAAAAkBAAGzgZmZmxsZmZZGjxoxMGWMzMzYGmZAAAAwyYAmxAMwGssY0YGAzCmZDzMzMDmtBAzMAAMDYA",
    imageUrl: "/talent-builds/전사-방어-산왕-쐐기.png",
  },
  {
    classSlug: "warrior",
    specSlug: "protection",
    sectionSlug: "raid",
    heroTalentSlug: "colossus",
    heroTalentName: "거신",
    accentColor: "#C8A45C",
    description: "",
    importCode:
      "CkEAAAAAAAAAAAAAAAAAAAAAA0yAAAzMjZmZmZGzmxsMjxYmGGDLzMzMDGzMAAAAYZAYGDAsZGDbwAzwCNmZBmxMDmtBAYmBAMDYA",
    imageUrl: "/talent-builds/전사-방어-거신-레이드.png",
  },
  {
    classSlug: "warrior",
    specSlug: "protection",
    sectionSlug: "raid",
    heroTalentSlug: "mountain-thane",
    heroTalentName: "산왕",
    accentColor: "#6896C2",
    description: "",
    importCode:
      "CkEAAAAAAAAAAAAAAAAAAAAAA0yAAAzMzYmZGzMzmxsMjxY0wMDLzMzMDzYmBAAAALDAzYAGYDWWMaMDgZDzsBzYmBz2AgZGAAGgB",
    imageUrl: "/talent-builds/전사-방어-산왕-레이드.png",
  },
];

export function getTalentBuilds(
  classSlug: string,
  specSlug: string,
  sectionSlug: TalentBuildSection
) {
  return TALENT_BUILDS.filter(
    (b) =>
      b.classSlug === classSlug &&
      b.specSlug === specSlug &&
      b.sectionSlug === sectionSlug
  );
}
