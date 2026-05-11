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

  // ── 주술사 / 정기 ────────────────────────────
  {
    classSlug: "shaman",
    specSlug: "elemental",
    sectionSlug: "mythic-plus",
    buildSlug: "farseer",
    buildName: "선견자",
    accentColor: "#5EBA9A",
    description: "",
    importCode:
      "CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMLbzMGjZZZZMmhBAAAAYxMbwAGwsxEYWAgZbmZGzssMTMzMbsMjZGDLWmxyMzYmZBAYGAMzYYYA",
    imageUrl: "/talent-builds/주술사-정기-선견자-쐐기.png",
  },
  {
    classSlug: "shaman",
    specSlug: "elemental",
    sectionSlug: "mythic-plus",
    buildSlug: "stormbringer",
    buildName: "폭풍인도자",
    accentColor: "#4A90E2",
    description: "",
    importCode:
      "CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbLzMzMzML2GMjZGAAAAAYzMG2gFYGGasBAz2MzMmZZZmwMzGLzYmxMWsMjFzMMzCAwMAzMwwwA",
    imageUrl: "/talent-builds/주술사-정기-폭풍인도자-쐐기.png",
  },
  {
    classSlug: "shaman",
    specSlug: "elemental",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMbLzMzMzMLbbDMmZAAAAAgNzYYDWgZYoxGAYbmZGjtlZahZmFWmZmZMDzyMWMzwMbAADgZGYYYA",
    imageUrl: "/talent-builds/주술사-정기-단일-레이드.png",
  },
  {
    classSlug: "shaman",
    specSlug: "elemental",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CYQAAAAAAAAAAAAAAAAAAAAAAAAAAAzMLbzMGjZZZZwMjBAAAAYxMbwAGwsxEYWAgZZmZGjtFTLMzYsYmZGzYxyMWegZGzMLDAYYAMzYYYA",
    imageUrl: "/talent-builds/주술사-정기-광역-레이드.png",
  },

  // ── 주술사 / 고양 ────────────────────────────
  {
    classSlug: "shaman",
    specSlug: "enhancement",
    sectionSlug: "mythic-plus",
    buildSlug: "totemic",
    buildName: "토템술사",
    accentColor: "#A67C52",
    description: "",
    importCode:
      "CcQAAAAAAAAAAAAAAAAAAAAAAMzMjZmZmZmZmZmZGzAAAAAAAAAALwGMjFN2GAzA2AY2mxMGLLGbMzsNzyMzMDsMmBAAYMmRMzAMYMA",
    imageUrl: "/talent-builds/주술사-고양-토템술사-쐐기.png",
  },
  {
    classSlug: "shaman",
    specSlug: "enhancement",
    sectionSlug: "mythic-plus",
    buildSlug: "stormbringer",
    buildName: "폭풍인도자",
    accentColor: "#4A90E2",
    description: "",
    importCode:
      "CcQAAAAAAAAAAAAAAAAAAAAAAMzMzgZmZmZmhZmZAAAAAAAAAsBYzMG2gFYGGawCAz2MmxMLLzYxMzYsMzDMz8AYZMDAwMMmZYEYmBDGD",
    imageUrl: "/talent-builds/주술사-고양-폭풍인도자-쐐기.png",
  },
  {
    classSlug: "shaman",
    specSlug: "enhancement",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CcQAAAAAAAAAAAAAAAAAAAAAAMzMjZmZmZmZmZmZGzAAAAAAAAAALwGMjFN2GAzA2AYWmxMGLLzYhZmNWmZmZYYMDAwMAjZmYmBAGD",
    imageUrl: "/talent-builds/주술사-고양-단일-레이드.png",
  },
  {
    classSlug: "shaman",
    specSlug: "enhancement",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CcQAAAAAAAAAAAAAAAAAAAAAAMzMjZmZmZmZmZmZGzAAAAAAAAAALwGMjFN2GAzA2AwyMmZGLLzYhZmNWmZmZYYMDAgBGjZmYmBAGD",
    imageUrl: "/talent-builds/주술사-고양-광역-레이드.png",
  },

  // ── 주술사 / 복원 ────────────────────────────
  {
    classSlug: "shaman",
    specSlug: "restoration",
    sectionSlug: "mythic-plus",
    buildSlug: "farseer",
    buildName: "선견자",
    accentColor: "#5EBA9A",
    description: "",
    importCode:
      "CgQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYMzMbLbzMzMzMzMGDjFzsADYAzCTgxCmZwsMzMjmtlZGmxglZMzYwsMDAADgZGDgZGMDG",
    imageUrl: "/talent-builds/주술사-복원-선견자-쐐기.png",
  },
  {
    classSlug: "shaman",
    specSlug: "restoration",
    sectionSlug: "mythic-plus",
    buildSlug: "totemic",
    buildName: "토템술사",
    accentColor: "#A67C52",
    description: "",
    importCode:
      "CgQAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAjZMLbLjZmZmZmZGDDLwCMjFN2GAzAbYmBzyMzMa2WmZYGzGLzYmxgZZGAAGAzMYmBgxgB",
    imageUrl: "/talent-builds/주술사-복원-토템술사-쐐기.png",
  },
  {
    classSlug: "shaman",
    specSlug: "restoration",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CgQAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAzMzMLLbDzMGzMzMDzYDWgZspx2AYGYzMMY2GzMTz2yMziZMbsMjZGDmlBAAAmZGMzAADG",
    imageUrl: "/talent-builds/주술사-복원-단일-레이드.png",
  },
  {
    classSlug: "shaman",
    specSlug: "restoration",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CgQAAAAAAAAAAAAAAAAAAAAAAAAAAgBAAAAzMzMLLbjZmxYmZmZYGLwGMjFN2GAzAbmBw2MzMTz2yMDzMDWmZMjBzyAAAAzMDmZAgBD",
    imageUrl: "/talent-builds/주술사-복원-광역-레이드.png",
  },

  // ── 마법사 / 비전 ────────────────────────────
  {
    classSlug: "mage",
    specSlug: "arcane",
    sectionSlug: "mythic-plus",
    buildSlug: "spellslinger",
    buildName: "주문술사",
    accentColor: "#BB6AE0",
    description: "",
    importCode:
      "C4DAAAAAAAAAAAAAAAAAAAAAAYGmZZmZmFMDamZGAAAGAAAYmZmllZmYBAgtZMzMmNzyMzMmZMGmZmxCzMzMzAAMAAAmZBAMDAGG",
    imageUrl: "/talent-builds/마법사-비전-주문술사-쐐기.png",
  },
  {
    classSlug: "mage",
    specSlug: "arcane",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 / 광역",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "C4DAAAAAAAAAAAAAAAAAAAAAAMzwYZmZmFegZGamZGAAAGAAAYmZmllZmYBAgthZmxstYZmZGzMGjZmZGLMjZegZAAGAAAzsAAmBADD",
    imageUrl: "/talent-builds/마법사-비전-단일-레이드.png",
  },

  // ── 마법사 / 화염 ────────────────────────────
  {
    classSlug: "mage",
    specSlug: "fire",
    sectionSlug: "mythic-plus",
    buildSlug: "sunfury",
    buildName: "성난태양",
    accentColor: "#FFA500",
    description: "",
    importCode:
      "C8DAAAAAAAAAAAAAAAAAAAAAAMzsZsMzMzCzMjMzYAAAYAAzMTz2yyMAAbmZGbjZmZsBAAAAALmZMDAAMmxMmZmZmFAMzAmxYwMMA",
    imageUrl: "/talent-builds/마법사-화염-성난태양-쐐기.png",
  },
  {
    classSlug: "mage",
    specSlug: "fire",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 / 광역",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "C8DAAAAAAAAAAAAAAAAAAAAAAYGGLzMzswMzIzMGAAAGAwMz0sssNDAwmZmx2YmZGbAAAAAwiZmZmBAAjZMjZmZmZZAYmBYMGYYA",
    imageUrl: "/talent-builds/마법사-화염-단일-레이드.png",
  },

  // ── 마법사 / 냉기 ────────────────────────────
  {
    classSlug: "mage",
    specSlug: "frost",
    sectionSlug: "mythic-plus",
    buildSlug: "spellslinger",
    buildName: "주문술사",
    accentColor: "#BB6AE0",
    description: "",
    importCode:
      "CAEAAAAAAAAAAAAAAAAAAAAAAMzwYZmZmFMjYmZGzMzMziZmhZMDAAAMzMzyyMTbAAwGAAAwCAbLjZmZGmthxMjFAAAmZDYGGDYGMA",
    imageUrl: "/talent-builds/마법사-냉기-주문술사-쐐기.png",
  },
  {
    classSlug: "mage",
    specSlug: "frost",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 / 광역",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CAEAAAAAAAAAAAAAAAAAAAAAAYGGLzMzsMmZEzMzYmZmZWMzMjZMDAAAMzMzyyMTbAAAAAAgNA2WGzMzMMbDjZYBAAgZ2AmBGwMYA",
    imageUrl: "/talent-builds/마법사-냉기-단일-레이드.png",
  },

  // ── 흑마법사 / 고통 ────────────────────────────
  {
    classSlug: "warlock",
    specSlug: "affliction",
    sectionSlug: "mythic-plus",
    buildSlug: "soul-harvester",
    buildName: "영혼수확자",
    accentColor: "#5D2E8C",
    description: "",
    importCode:
      "CkQAAAAAAAAAAAAAAAAAAAAAAwMjZGNLmZ2mZGz2AAAmZmlZzMzyYAgx2yADYAzwWghtBAAgZAAAMzMmhx2YMDmZmZMMzMzAAmBG",
    imageUrl: "/talent-builds/흑마법사-고통-영혼수확자-쐐기.png",
  },
  {
    classSlug: "warlock",
    specSlug: "affliction",
    sectionSlug: "mythic-plus",
    buildSlug: "hellcaller",
    buildName: "지옥소환사",
    accentColor: "#C0392B",
    description: "",
    importCode:
      "CkQAAAAAAAAAAAAAAAAAAAAAAwMjZGNbmZ2mZGzyAAAmZmlZzMzyYAALwAziRjZAMbglBAAgZAAgZGMmxY2GjZMjZGjhZmZAAmBG",
    imageUrl: "/talent-builds/흑마법사-고통-지옥소환사-쐐기.png",
  },
  {
    classSlug: "warlock",
    specSlug: "affliction",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CkQAAAAAAAAAAAAAAAAAAAAAAgZmZmpZhZ2mZGzCAAgZmlZZmZWmZAgx2yADYAzwSghtBAAgZAAAMzMmZmBMMjZmZMYmZMAgZgB",
    imageUrl: "/talent-builds/흑마법사-고통-단일-레이드.png",
  },
  {
    classSlug: "warlock",
    specSlug: "affliction",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CkQAAAAAAAAAAAAAAAAAAAAAAwMmZGNbMjZmZmlBAAMzMLzmZmlxAAjltBGwAmhtADbDAAAzAAAYmZmZMDzMmBzMzMGmZmBAYAD",
    imageUrl: "/talent-builds/흑마법사-고통-광역-레이드.png",
  },

  // ── 흑마법사 / 악마 ────────────────────────────
  {
    classSlug: "warlock",
    specSlug: "demonology",
    sectionSlug: "mythic-plus",
    buildSlug: "diabolist",
    buildName: "악마학자",
    accentColor: "#8B4789",
    description: "",
    importCode:
      "CoQAAAAAAAAAAAAAAAAAAAAAAwMmZGNbMz2MzYWGAAAAAAAwYGDLwAbDL0wixMjlZbmZGzAAzMGzMzMAjZMjNAAwYmZGDDLzYAD",
    imageUrl: "/talent-builds/흑마법사-악마-악마학자-쐐기.png",
  },
  {
    classSlug: "warlock",
    specSlug: "demonology",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CoQAAAAAAAAAAAAAAAAAAAAAAwMzMzoZjhZmZmlBAAAAAAYstMwAGwMsFYsZMGLzyMzMmBAMzMzMDwMjZGjBAAYMzMzMGsMDgB",
    imageUrl: "/talent-builds/흑마법사-악마-단일-레이드.png",
  },
  {
    classSlug: "warlock",
    specSlug: "demonology",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CoQAAAAAAAAAAAAAAAAAAAAAAwMmZGNbMMzMmtBAAAAAAAMmxwCMw2wCNsYwMLz2MzMmBAmhZmZmZAmZGzMbAAgZmZmxwYWmxAGA",
    imageUrl: "/talent-builds/흑마법사-악마-광역-레이드.png",
  },

  // ── 흑마법사 / 파괴 ────────────────────────────
  {
    classSlug: "warlock",
    specSlug: "destruction",
    sectionSlug: "mythic-plus",
    buildSlug: "diabolist",
    buildName: "악마학자",
    accentColor: "#8B4789",
    description: "",
    importCode:
      "CsQAAAAAAAAAAAAAAAAAAAAAAwMmZGNLM2mZmZWmNzMzsYmZbZMAAYGjZmZBMmxwCMw2wGNWYAAgxgBAYmBYMjxsAAAYmZGAAMDD",
    imageUrl: "/talent-builds/흑마법사-파괴-악마학자-쐐기.png",
  },
  {
    classSlug: "warlock",
    specSlug: "destruction",
    sectionSlug: "mythic-plus",
    buildSlug: "hellcaller",
    buildName: "지옥소환사",
    accentColor: "#C0392B",
    description: "",
    importCode:
      "CsQAAAAAAAAAAAAAAAAAAAAAAwMjZGNbmx2MzYWmNzMzsYmZZZMAAYGjZmZxCMwsY0YGAzG2YAAgxMMAAYmBjZMmFAAAzMzMAA8ADD",
    imageUrl: "/talent-builds/흑마법사-파괴-지옥소환사-쐐기.png",
  },
  {
    classSlug: "warlock",
    specSlug: "destruction",
    sectionSlug: "raid",
    buildSlug: "single",
    buildName: "단일 대상",
    accentColor: RAID_SINGLE_COLOR,
    description: "",
    importCode:
      "CsQAAAAAAAAAAAAAAAAAAAAAAYmxMzoZjhZmZmlZZmZmZxY2WMDAAmxYmZWsADMLGNmBwshNGAAYMAbAAzMwMjZGAAAmZmBAgxwA",
    imageUrl: "/talent-builds/흑마법사-파괴-단일-레이드.png",
  },
  {
    classSlug: "warlock",
    specSlug: "destruction",
    sectionSlug: "raid",
    buildSlug: "aoe",
    buildName: "광역",
    accentColor: RAID_AOE_COLOR,
    description: "",
    importCode:
      "CsQAAAAAAAAAAAAAAAAAAAAAAgZmZGNbM2mZGzysMmZmFzMLLMAAYGjZmZBMmxwCMw2wCNWYAAgxghNAMzAMzMmZAAAYmZGAAMDD",
    imageUrl: "/talent-builds/흑마법사-파괴-광역-레이드.png",
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
