export type TalentBuildSection = "mythic-plus" | "raid";

export type TalentBuild = {
  classSlug: string;
  specSlug: string;
  sectionSlug: TalentBuildSection;
  buildSlug: string;
  buildName: string;
  accentColor: string;
  description: string;
  importCode: string;
  imageUrl?: string;
};

const RAID_SINGLE_COLOR = "#DC143C";
const RAID_AOE_COLOR = "#F39C12";

export const TALENT_BUILDS: TalentBuild[] = [
  // ── 전사 / 무기 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "arms",
    sectionSlug: "mythic-plus",
    buildSlug: "colossus",
    buildName: "거신",
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
    buildSlug: "slayer",
    buildName: "학살자",
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
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CcEAAAAAAAAAAAAAAAAAAAAAAAzMzsMzMzMDAAAghphZGzMWmZmZGMmZAAAAAMzyMDIjx2yALgBMDTgZwGwMY2GDmxAMzAwMGGA",
    imageUrl: "/talent-builds/전사-무기-단일-레이드.png",
  },
  {
    classSlug: "warrior",
    specSlug: "arms",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CcEAAAAAAAAAAAAAAAAAAAAAAgZmxsMzMzYGAAAghphZYmZZZmZmZYGzMAAAAAGbmB2iBsZGDLwAzwGNGsAMDGDmNz2gZGAwMzwA",
    imageUrl: "/talent-builds/전사-무기-광역-레이드.png",
  },

  // ── 전사 / 분노 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "fury",
    sectionSlug: "mythic-plus",
    buildSlug: "mountain-thane",
    buildName: "산왕",
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
    buildSlug: "slayer",
    buildName: "학살자",
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
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDjxMsMzMzMDjZGzYGzsMzMzYmZbMzMAAQMWWGYBMgZYCMDbAzMbMbDAAmZMMmZGGM",
    imageUrl: "/talent-builds/전사-분노-단일-레이드.png",
  },
  {
    classSlug: "warrior",
    specSlug: "fury",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgGDDzMz2yMzMzMMmZMjZMzyMzYMzsMmZGAAIMwGssY0YGAzCmxCgZwYAwMDghZmZGGM",
    imageUrl: "/talent-builds/전사-분노-광역-레이드.png",
  },

  // ── 전사 / 방어 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "protection",
    sectionSlug: "mythic-plus",
    buildSlug: "colossus",
    buildName: "거신",
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
    buildSlug: "mountain-thane",
    buildName: "산왕",
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
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CkEAAAAAAAAAAAAAAAAAAAAAAkBAAmZGzMzMzMmNjZZGjxohxMbmZmZGzMmZAAAAwyYAmxAMwGssY0YGAzGmZDmhZYGDAmZAAwAG",
    imageUrl: "/talent-builds/전사-방어-단일-레이드.png",
  },
  {
    classSlug: "warrior",
    specSlug: "protection",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "단일/광역 동일 빌드",
    importCode:
      "CkEAAAAAAAAAAAAAAAAAAAAAAkBAAmZGzMzMzMmNjZZGjxohxMbmZmZGzMmZAAAAwyYAmxAMwGssY0YGAzGmZDmhZYGDAmZAAwAG",
    imageUrl: "/talent-builds/전사-방어-단일-레이드.png",
  },

  // ── 성기사 / 보호 ────────────────────────────
  {
    classSlug: "paladin",
    specSlug: "protection",
    sectionSlug: "mythic-plus",
    buildSlug: "lightsmith",
    buildName: "빛의 대장장이",
    accentColor: "#F0E68C",
    description: "",
    importCode:
      "CIEAAAAAAAAAAAAAAAAAAAAAAsNjBzyYZMjZmZZZMzwsMLDDAwAAAAAAgmmZWmZMzMGmt2AwADYGsBAAAAzMbbLtMzYxMYAAzwYAwMDAmZAD",
    imageUrl: "/talent-builds/성기사-보호-빛의 대장장이-쐐기.png",
  },
  {
    classSlug: "paladin",
    specSlug: "protection",
    sectionSlug: "mythic-plus",
    buildSlug: "templar",
    buildName: "기사단",
    accentColor: "#E6CC80",
    description: "",
    importCode:
      "CIEAAAAAAAAAAAAAAAAAAAAAAsNjBzyYZMjZmZZZMzwsMbDDAwAAAAAAgmmZWmZMzMGs1GAGYADsBAAmZabmZbGAgNzwMAGjZYMAALzAMzAG",
    imageUrl: "/talent-builds/성기사-보호-기사단-쐐기.png",
  },
  {
    classSlug: "paladin",
    specSlug: "protection",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CIEAAAAAAAAAAAAAAAAAAAAAAsZmZYWmZZmZMzwyYMmZhhBAYAAAAAAQaMbzMmZYMzWAwAGYGsBAAmZabmZZGAgNwMgBjZYMAALzAMzAG",
    imageUrl: "/talent-builds/성기사-보호-단일-레이드.png",
  },
  {
    classSlug: "paladin",
    specSlug: "protection",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CIEAAAAAAAAAAAAAAAAAAAAAAsZMYWGLzMjZmZbZMGzsMLDDAwAAAAAAg0YWmZMzMGmt2AwAAzgNAAwMTbzMLzAAsxwMAGjZYMAALzAMzAG",
    imageUrl: "/talent-builds/성기사-보호-광역-레이드.png",
  },

  // ── 성기사 / 신성 ────────────────────────────
  {
    classSlug: "paladin",
    specSlug: "holy",
    sectionSlug: "mythic-plus",
    buildSlug: "lightsmith",
    buildName: "빛의 대장장이",
    accentColor: "#F0E68C",
    description: "",
    importCode:
      "CEEAAAAAAAAAAAAAAAAAAAAAAAAAAMLAgZAAGsMmhZGzMzGjx4BWGbzMLmpJGzYmZYY2yAwAwGYjFzMAAAwMzy2ilZG2YbYwGwMGDAMzAwMGjGA",
    imageUrl: "/talent-builds/성기사-신성-빛의 대장장이-쐐기.png",
  },
  {
    classSlug: "paladin",
    specSlug: "holy",
    sectionSlug: "mythic-plus",
    buildSlug: "herald-of-the-sun",
    buildName: "태양의 사자",
    accentColor: "#FFB800",
    description: "",
    importCode:
      "CEEAAAAAAAAAAAAAAAAAAAAAAAAAAMLAgZAAglxMYmlZmZxYGDLjtZmFzkYWmxMzMGmtMAMghNwGLzYmlZbmZ2aAAAAWYhHA2AmxMYAAMzgxYYA",
    imageUrl: "/talent-builds/성기사-신성-태양의 사자-쐐기.png",
  },
  {
    classSlug: "paladin",
    specSlug: "holy",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CEEAAAAAAAAAAAAAAAAAAAAAAAAAAYBAMAAglxMzYGzMzGjxYWGbzMLmpJmlZMzMMMbZAYADbgNzyMmZZ2mZmtGAAAgFAYDGzYGAAwMDzYMMA",
    imageUrl: "/talent-builds/성기사-신성-단일-레이드.png",
  },
  {
    classSlug: "paladin",
    specSlug: "holy",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CEEAAAAAAAAAAAAAAAAAAAAAAAAAAYBAMDAAsMmZGzYmZ2YMGzyYbmZxMNxYGzMDDzWGAGwwGYjlZMzysNzMbNAAAALgHA2gxMmBAAMzwMGDD",
    imageUrl: "/talent-builds/성기사-신성-광역-레이드.png",
  },

  // ── 성기사 / 징벌 ────────────────────────────
  {
    classSlug: "paladin",
    specSlug: "retribution",
    sectionSlug: "mythic-plus",
    buildSlug: "templar",
    buildName: "기사단",
    accentColor: "#E6CC80",
    description: "",
    importCode:
      "CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz22MzsMGzMAAAAAAmpMLzwMjthZbYmtZMGjhZsxGAAAzMtMzsNDAYDwAgxMmBmZmZ2wyMYYMMYA",
    imageUrl: "/talent-builds/성기사-징벌-기사단-쐐기.png",
  },
  {
    classSlug: "paladin",
    specSlug: "retribution",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz22MzsMMzAAAAAAwoMmhZGbDz2wMbzYMmZYGbsNMAAwMTbzMbzAA2AMAYMDzgZMmNsMDGGzYwA",
    imageUrl: "/talent-builds/성기사-징벌-단일-레이드.png",
  },
  {
    classSlug: "paladin",
    specSlug: "retribution",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CYEAAAAAAAAAAAAAAAAAAAAAAAAAAAAQz22MjlxYmBAAAAAwMlZZGmZsNMbDzsNjxYmhZsxGAAAzMtNzsNDAYDwAgxMmBmZmZ2wyMYYMMYA",
    imageUrl: "/talent-builds/성기사-징벌-광역-레이드.png",
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
