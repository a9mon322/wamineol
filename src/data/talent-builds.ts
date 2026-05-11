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

  // ── 사냥꾼 / 야수 ────────────────────────────
  {
    classSlug: "hunter",
    specSlug: "beast-mastery",
    sectionSlug: "mythic-plus",
    buildSlug: "pack-leader",
    buildName: "무리의 지도자",
    accentColor: "#98D982",
    description: "",
    importCode:
      "C0PAAAAAAAAAAAAAAAAAAAAAAAMmxwGsAzwQDbAAYGPwyMzsYGmZmZGzMMzMmhZGzYGbzMDjZwYaGAAAAAAAAgHYmxAmZDwYmFwyAA",
    imageUrl: "/talent-builds/사냥꾼-야수-무리의 지도자-쐐기.png",
  },
  {
    classSlug: "hunter",
    specSlug: "beast-mastery",
    sectionSlug: "mythic-plus",
    buildSlug: "dark-ranger",
    buildName: "어둠순찰자",
    accentColor: "#9B59B6",
    description: "",
    importCode:
      "C0PAAAAAAAAAAAAAAAAAAAAAAYzsNwAGwMsBMWAAwMjlZmhZYmZGMjZmZYGzMjZmZsNzMMmBjpZAAAAAMDAAAzDMmZYmBIgZBsNA",
    imageUrl: "/talent-builds/사냥꾼-야수-어둠순찰자-쐐기.png",
  },
  {
    classSlug: "hunter",
    specSlug: "beast-mastery",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "C0PAAAAAAAAAAAAAAAAAAAAAAAMmxwCsAzwQDbAAYG2GzsNzwMmZYYmxYmxMzYGzYbmZMjZwYaGAAAAAzAAAwYmxAmZDwwsA2GA",
    imageUrl: "/talent-builds/사냥꾼-야수-단일-레이드.png",
  },
  {
    classSlug: "hunter",
    specSlug: "beast-mastery",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "C0PAAAAAAAAAAAAAAAAAAAAAAAMmxwCsAzwQDbAAYGPwyMzsYGmZmZGzMMzMmhZGzMzYzMjZMDGTzAAAAAAAAAmZMGwMbAwsA2GA",
    imageUrl: "/talent-builds/사냥꾼-야수-광역-레이드.png",
  },

  // ── 사냥꾼 / 사격 ────────────────────────────
  {
    classSlug: "hunter",
    specSlug: "marksmanship",
    sectionSlug: "mythic-plus",
    buildSlug: "sentinel",
    buildName: "파수꾼",
    accentColor: "#5DADE2",
    description: "",
    importCode:
      "C4PAAAAAAAAAAAAAAAAAAAAAAwCMwMGNWGAzgNAAAAAAAAgZMzMjtZMjxMsMmmxYMz22mZmZYmhlZmlxYWGmZAAAegxYAYmxGDDwGG",
    imageUrl: "/talent-builds/사냥꾼-사격-파수꾼-쐐기.png",
  },
  {
    classSlug: "hunter",
    specSlug: "marksmanship",
    sectionSlug: "mythic-plus",
    buildSlug: "dark-ranger",
    buildName: "어둠순찰자",
    accentColor: "#9B59B6",
    description: "",
    importCode:
      "C4PAAAAAAAAAAAAAAAAAAAAAAYzsNwAGwMsFYWAAAAAAAAAmxMmx2MmZGzgx0MGMLbMzMLzMzMzMLMzywMDAAwMGzMzMgBGGgNmB",
    imageUrl: "/talent-builds/사냥꾼-사격-어둠순찰자-쐐기.png",
  },
  {
    classSlug: "hunter",
    specSlug: "marksmanship",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "C4PAAAAAAAAAAAAAAAAAAAAAAYzsNwAGwMsFYWAAAAAAAAAmxMmx2MmZGzgx0MGMbbMzMLzMjZmZjZWGMDAAYMzMzMzMgBwAsxMjB",
    imageUrl: "/talent-builds/사냥꾼-사격-단일-레이드.png",
  },
  {
    classSlug: "hunter",
    specSlug: "marksmanship",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "C4PAAAAAAAAAAAAAAAAAAAAAAwCMwMGNWGAzgNAAAAAAAAgZMzMDzYmZMDGTzYwsttZmZMzMzMzswMLDzMAAgxMjBgZGbYxAsxMjB",
    imageUrl: "/talent-builds/사냥꾼-사격-광역-레이드.png",
  },

  // ── 사냥꾼 / 생존 ────────────────────────────
  {
    classSlug: "hunter",
    specSlug: "survival",
    sectionSlug: "mythic-plus",
    buildSlug: "pack-leader",
    buildName: "무리의 지도자",
    accentColor: "#98D982",
    description: "",
    importCode:
      "C8PAAAAAAAAAAAAAAAAAAAAAAMgxMG2gFYGGawiZmZmZYZAAAAAAwMmxM2mxwYGWGTzAAAAwAAjllZmZxMzMMjxAmZDwwYMzsZA",
    imageUrl: "/talent-builds/사냥꾼-생존-무리의 지도자-쐐기.png",
  },
  {
    classSlug: "hunter",
    specSlug: "survival",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "C8PAAAAAAAAAAAAAAAAAAAAAAMgxMGWgFYGGawixMzMzYZAAAAAAwMmZmhZMmxMYoZAAAAAAMWWmZmFzMzMzMzAYmNAzixYGbGA",
    imageUrl: "/talent-builds/사냥꾼-생존-단일-레이드.png",
  },
  {
    classSlug: "hunter",
    specSlug: "survival",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "C8PAAAAAAAAAAAAAAAAAAAAAAMgxMG2gFYGGawiZmZmZYZAAAAAAwMmxMYMmxMYMNDAAAAAgxyyMzsYmZGzMzYAzsBYWMGzMbGA",
    imageUrl: "/talent-builds/사냥꾼-생존-광역-레이드.png",
  },

  // ── 도적 / 암살 ────────────────────────────
  {
    classSlug: "rogue",
    specSlug: "assassination",
    sectionSlug: "mythic-plus",
    buildSlug: "fatebound",
    buildName: "운명결속",
    accentColor: "#B19CD9",
    description: "",
    importCode:
      "CMQAAAAAAAAAAAAAAAAAAAAAAYmlZmNDGAAAAAYWGsNDAAAAAotlZmZmZmxYmZmZbmlZGPgHYmZmZMMzYMAGYBmxoxsBYbAbGAMzMYA",
    imageUrl: "/talent-builds/도적-암살-운명결속-쐐기.png",
  },
  {
    classSlug: "rogue",
    specSlug: "assassination",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CMQAAAAAAAAAAAAAAAAAAAAAAYmlxsZwAAAAAAzyglZAAAAAAZbMzMzMjxMzMz2MLzMzgxMzMjZGzYAMwCMjRjZDw2A2MAYmZmxA",
    imageUrl: "/talent-builds/도적-암살-단일-레이드.png",
  },
  {
    classSlug: "rogue",
    specSlug: "assassination",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CMQAAAAAAAAAAAAAAAAAAAAAAYmlZmNDGAAAAAYWGsNDAAAAAIbzMzMzMjxMzMz2MLzMeAPwMjZGDzMGDgBWgZMaMbA2GwmxGgZmxYA",
    imageUrl: "/talent-builds/도적-암살-광역-레이드.png",
  },

  // ── 도적 / 무법 ────────────────────────────
  {
    classSlug: "rogue",
    specSlug: "outlaw",
    sectionSlug: "mythic-plus",
    buildSlug: "trickster",
    buildName: "기만자",
    accentColor: "#FF6B9D",
    description: "",
    importCode:
      "CQQAAAAAAAAAAAAAAAAAAAAAAAgx2MYmZmZmtZmZMzMzsBmZbaZw2MAAAAAALLzMzwMzMzYmZ2GAAAAGDAGzihBGYWYhWYjBYmBzgB",
    imageUrl: "/talent-builds/도적-무법-기만자-쐐기.png",
  },
  {
    classSlug: "rogue",
    specSlug: "outlaw",
    sectionSlug: "mythic-plus",
    buildSlug: "fatebound",
    buildName: "운명결속",
    accentColor: "#B19CD9",
    description: "",
    importCode:
      "CQQAAAAAAAAAAAAAAAAAAAAAAAgx2MGzMzMzsNzMzMzMzsAmx0ygtZAAAAAAWWmZmhZmZmxMzsNAAAAmBwAbwMGNmNAbDswAgZmBG",
    imageUrl: "/talent-builds/도적-무법-운명결속-쐐기.png",
  },
  {
    classSlug: "rogue",
    specSlug: "outlaw",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CQQAAAAAAAAAAAAAAAAAAAAAAAgZ2mxYmZmZmtZmZmZMmNeAmx0ygtZAAAAAA22GzMMzMzMmZmtBAAAgxMAMmFDDMwswCtwGDwMDGYA",
    imageUrl: "/talent-builds/도적-무법-단일-레이드.png",
  },
  {
    classSlug: "rogue",
    specSlug: "outlaw",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CQQAAAAAAAAAAAAAAAAAAAAAAAgx2MYmZMzsNzMzMzMzsBmZbaZw2MAAAAAgZbbmZGmZmZGzMz2AAAAwYAwYWMMwAzCL0CbMAzMYgB",
    imageUrl: "/talent-builds/도적-무법-광역-레이드.png",
  },

  // ── 도적 / 잠행 ────────────────────────────
  {
    classSlug: "rogue",
    specSlug: "subtlety",
    sectionSlug: "mythic-plus",
    buildSlug: "trickster",
    buildName: "기만자",
    accentColor: "#FF6B9D",
    description: "",
    importCode:
      "CUQAAAAAAAAAAAAAAAAAAAAAAAgx2MAAAAAwsMGLTMbbjxMjZMegZmZGjZbYmZbZmZMzMjBjZWGAAAAGMGwY2MMwAzCL0iNMDYmBzYA",
    imageUrl: "/talent-builds/도적-잠행-기만자-쐐기.png",
  },
  {
    classSlug: "rogue",
    specSlug: "subtlety",
    sectionSlug: "mythic-plus",
    buildSlug: "deathstalker",
    buildName: "죽음추적자",
    accentColor: "#708090",
    description: "",
    importCode:
      "CUQAAAAAAAAAAAAAAAAAAAAAAAgZ2mBAAAAAmlxYZiZbbMmhZMegZmZGjZbGzYbZmZMzMjBjZWGAAAAGMmFzyADYBsMMBmFMDzMAzYA",
    imageUrl: "/talent-builds/도적-잠행-죽음추적자-쐐기.png",
  },
  {
    classSlug: "rogue",
    specSlug: "subtlety",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CUQAAAAAAAAAAAAAAAAAAAAAAAgx2MAAAAAwsMGLTMbbjxMjZwMzMzYMbDzYbbmZmZmZMYMz2AAAAwgxAGzmhBGYWYhWshZAzMYGDA",
    imageUrl: "/talent-builds/도적-잠행-단일-레이드.png",
  },
  {
    classSlug: "rogue",
    specSlug: "subtlety",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CUQAAAAAAAAAAAAAAAAAAAAAAAgx2MAAAAAwsMGLTMbbjxMjZMegZmZGjZbYGbbzMzMzMjBjZ2GAAAAGMGwY2MMwAzCL0iNMDYmBzYA",
    imageUrl: "/talent-builds/도적-잠행-광역-레이드.png",
  },

  // ── 사제 / 수양 ────────────────────────────
  {
    classSlug: "priest",
    specSlug: "discipline",
    sectionSlug: "mythic-plus",
    buildSlug: "oracle",
    buildName: "예언자",
    accentColor: "#FFD700",
    description: "",
    importCode:
      "CAQAAAAAAAAAAAAAAAAAAAAAAADsNzDwyMjxMzgZbmtZmxMmZAAAAAAAAAAMMLzgZmZYGmBMNTMAzsghwYWGgxgFAAYMzMjhZGgZmZAD",
    imageUrl: "/talent-builds/사제-수양-예언자-쐐기.png",
  },
  {
    classSlug: "priest",
    specSlug: "discipline",
    sectionSlug: "mythic-plus",
    buildSlug: "voidweaver",
    buildName: "공허술사",
    accentColor: "#8B5DD8",
    description: "",
    importCode:
      "CAQAAAAAAAAAAAAAAAAAAAAAAADsYY2mZmZmZmZMbwMzMDzAAAAAAAAAAYYWmBzMzwMmZATzEDmZAAAmtZbDM2MAAMmZmxgZwMDmpZ4BA",
    imageUrl: "/talent-builds/사제-수양-공허술사-쐐기.png",
  },
  {
    classSlug: "priest",
    specSlug: "discipline",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CAQAAAAAAAAAAAAAAAAAAAAAAADsMY2mZm5BYmBmZbmZmZYGAAAAAAAAAAjxyMYmZGmhZATz0MDwMbYIMmlBYMYBAAGjZGDzMAzMDzwA",
    imageUrl: "/talent-builds/사제-수양-단일-레이드.png",
  },
  {
    classSlug: "priest",
    specSlug: "discipline",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CAQAAAAAAAAAAAAAAAAAAAAAAADsYY2YMzYmZMmZbmZmBzAAAAAAAAAAYmZWmBzMzghZATz0MDwMLYIMmlBYMYBAAGDzYYmBYmZGzwA",
    imageUrl: "/talent-builds/사제-수양-광역-레이드.png",
  },

  // ── 사제 / 신성 ────────────────────────────
  {
    classSlug: "priest",
    specSlug: "holy",
    sectionSlug: "mythic-plus",
    buildSlug: "archon",
    buildName: "집정관",
    accentColor: "#F5DEB3",
    description: "",
    importCode:
      "CEQAAAAAAAAAAAAAAAAAAAAAAwYAAAAAAgZDGzygxMzMjZmZsMzMDAAAADzyMMzMzwMmZAMTBAmZzMMbGAYMYzYmNANjZGjBzstMAzAD",
    imageUrl: "/talent-builds/사제-신성-집정관-쐐기.png",
  },
  {
    classSlug: "priest",
    specSlug: "holy",
    sectionSlug: "mythic-plus",
    buildSlug: "oracle",
    buildName: "예언자",
    accentColor: "#FFD700",
    description: "",
    importCode:
      "CEQAAAAAAAAAAAAAAAAAAAAAAwYAAAAAAAbGzYWGzwMjhZYsNzMzAAAAYMWmBzMzgxMjxGmpAYmFMEGzyAMGYxMzAgZMzYMMzAMzMgB",
    imageUrl: "/talent-builds/사제-신성-예언자-쐐기.png",
  },
  {
    classSlug: "priest",
    specSlug: "holy",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CEQAAAAAAAAAAAAAAAAAAAAAAwYAAAAAAAgZmlxYMzMDzMzYZGmBAAAwMmlZwMzMMDzAYmaAgZWMDziBAGD2MzMLAaGjxYYmZbZAmBG",
    imageUrl: "/talent-builds/사제-신성-단일-레이드.png",
  },
  {
    classSlug: "priest",
    specSlug: "holy",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CEQAAAAAAAAAAAAAAAAAAAAAAwYAAAAAAAgZmlxYMzMDzMzYZGmBAAAwMmlZwMzMMzYGAzUDAMziZYWMAwYwmZmZBQGjxYYmZbZAmBG",
    imageUrl: "/talent-builds/사제-신성-광역-레이드.png",
  },

  // ── 사제 / 암흑 ────────────────────────────
  {
    classSlug: "priest",
    specSlug: "shadow",
    sectionSlug: "mythic-plus",
    buildSlug: "voidweaver",
    buildName: "공허술사",
    accentColor: "#8B5DD8",
    description: "",
    importCode:
      "CIQAAAAAAAAAAAAAAAAAAAAAAMjZMGAAAAAAAAAAAAjZZmxYZmxMz2MDDz2MzYmZGQmhtZaMwMzMAQAmtZbDMbMAwgxMzMmtxMYmBzgB",
    imageUrl: "/talent-builds/사제-암흑-공허술사-쐐기.png",
  },
  {
    classSlug: "priest",
    specSlug: "shadow",
    sectionSlug: "mythic-plus",
    buildSlug: "archon",
    buildName: "집정관",
    accentColor: "#F5DEB3",
    description: "",
    importCode:
      "CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAghZxMGLzMmZWmZYY2mZGzMzYDZYZbmGgZAmZzMMbGAyYsAgZAGzMzY2GzstMAzgB",
    imageUrl: "/talent-builds/사제-암흑-집정관-쐐기.png",
  },
  {
    classSlug: "priest",
    specSlug: "shadow",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAgxYxMGLzMMz2MDzY2MzYmZGbIzYxMNAzAMziZY2MAkxYBAzAMmZmxsNmZbZAmBD",
    imageUrl: "/talent-builds/사제-암흑-단일-레이드.png",
  },
  {
    classSlug: "priest",
    specSlug: "shadow",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CIQAAAAAAAAAAAAAAAAAAAAAAMMjZGAAAAAAAAAAAghZxMGLzMmZ2mZYG2mZGzMzYDZGLmpBYmZGAIAz2stBmNGAYwYmZGz2YGMzgZwA",
    imageUrl: "/talent-builds/사제-암흑-광역-레이드.png",
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
