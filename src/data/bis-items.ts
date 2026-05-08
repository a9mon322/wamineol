export type BisSlot =
  | "head"
  | "neck"
  | "shoulders"
  | "back"
  | "chest"
  | "wrist"
  | "hands"
  | "waist"
  | "legs"
  | "feet"
  | "ring1"
  | "ring2"
  | "main-hand"
  | "off-hand";

export const BIS_SLOT_ORDER: BisSlot[] = [
  "head",
  "neck",
  "shoulders",
  "back",
  "chest",
  "wrist",
  "hands",
  "waist",
  "legs",
  "feet",
  "ring1",
  "ring2",
  "main-hand",
  "off-hand",
];

export const BIS_SLOT_LABELS: Record<BisSlot, string> = {
  "head": "머리",
  "neck": "목",
  "shoulders": "어깨",
  "back": "등",
  "chest": "가슴",
  "wrist": "손목",
  "hands": "손",
  "waist": "허리",
  "legs": "다리",
  "feet": "발",
  "ring1": "반지 1",
  "ring2": "반지 2",
  "main-hand": "주무기",
  "off-hand": "보조 장비",
};

export type BisItem = {
  slot: BisSlot;
  itemName: string;
  itemId?: number;
  iconName?: string;
  source: string;
  note?: string;
};

export type BisContentType = "mythic-plus" | "raid";

export type BisTrinket = {
  contentType: BisContentType;
  itemName: string;
  itemId?: number;
  iconName?: string;
  source: string;
  tier?: "S" | "A" | "B";
  note?: string;
};

export type BisBuild = {
  classSlug: string;
  specSlug: string;
  patchVersion?: string;
  items: BisItem[];
  trinkets: BisTrinket[];
};

// itemId → 한국어명. 동일 아이템이 여러 직업/전문화 빌드에서 재사용되므로 한 곳에 모아둠.
export const ITEM_TRANSLATIONS: Record<number, string> = {
  249952: "밤의 종결자의 엄니",
  249337: "뒤틀린 악의의 리본",
  249950: "밤의 종결자의 견갑",
  239656: "신봉자의 비단 수의",
  249955: "밤의 종결자의 가슴보호갑",
  237834: "주문파괴자의 팔보호구",
  251081: "잿불숲 손아귀",
  249949: "밤의 종결자의 요대",
  249951: "밤의 종결자의 정강이싸개",
  249381: "형성되지 않은 자의 경갑",
  249920: "한밤의 눈",
  251217: "공허의 맞물림",
  249296: "알라엔달 - 여명의 노래",
  249343: "알른 선견자의 응시",
  249342: "고대의 허기 심장",
  260235: "암영의 꽁지깃",
  249806: "광휘의 꽁지깃",
  249344: "빛의 부대기",
  193701: "알게타르 수수께끼 상자",
  252420: "태양섬광 분광경",
};

// 와우 아이템 등급 색상. 와우헤드 스크립트가 hydration 후 늦게 색칠하면 깜빡임이 보여
// SSR 시점에 우리가 직접 inline style로 적용한다.
export type ItemRarity = "rare" | "epic" | "legendary";

export const RARITY_COLORS: Record<ItemRarity, string> = {
  rare: "#0070dd",
  epic: "#a335ee",
  legendary: "#ff8000",
};

// itemId별 등급. 등록 안 된 아이템은 기본값(epic)으로 처리.
export const ITEM_RARITY: Record<number, ItemRarity> = {
  251081: "rare", // 잿불숲 손아귀
  251217: "rare", // 공허의 맞물림
};

export function getBisItemColor(item: { itemId?: number }): string {
  if (item.itemId && ITEM_RARITY[item.itemId]) {
    return RARITY_COLORS[ITEM_RARITY[item.itemId]];
  }
  return RARITY_COLORS.epic;
}

// source 문자열 → 한국어. 같은 획득처가 여러 아이템에서 반복되므로 한 곳에 모아둠.
// 매핑 없는 source는 영문 그대로 표시.
export const SOURCE_TRANSLATIONS: Record<string, string> = {
  "The Voidspire (Raid) - Lightblinded Vanguard": "공허첨탑 (레이드) - 빛에 눈이 먼 선봉대",
  "The Voidspire (Raid) - Fallen-King Salhadaar": "공허첨탑 (레이드) - 몰락한 왕 살라다르",
  "The Voidspire (Raid) - Vaelgor and Ezzorak": "공허첨탑 (레이드) - 바엘고어와 에조라크",
  "The Voidspire (Raid) - Vorasius": "공허첨탑 (레이드) - 보라시우스",
  "The Dreamrift (Raid) - Chimaerus": "꿈의 균열 (레이드) - 카이메루스",
  "March on Quel'Danas (Raid) - Midnight Falls": "쿠엘다나스 진격로 (레이드) - 한밤의 도래",
  "Windrunner Spire (Dungeon)": "윈드러너 첨탑 (던전)",
  "Nexus-Point Xenas (Dungeon)": "공결탑 제나스 (던전)",
  "Algeth'ar Academy (Dungeon)": "알게타르 대학 (던전)",
  "Skyreach (Dungeon)": "하늘탑 (던전)",
  "Crafted (Tailoring)": "제작",
  "Crafted (Blacksmithing)": "제작",
  "Matrix Catalyst": "촉매",
};

export const BIS_BUILDS: BisBuild[] = [
  // ── 전사 / 무기 ────────────────────────────
  {
    classSlug: "warrior",
    specSlug: "arms",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "head",
        itemName: "Night Ender's Tusks",
        itemId: 249952,
        iconName: "inv_helm_plate_raidwarriormidnight_d_01",
        source: "The Voidspire (Raid) - Lightblinded Vanguard",
      },
      {
        slot: "neck",
        itemName: "Ribbon of Coiled Malice",
        itemId: 249337,
        iconName: "inv_12_jewelry_devouringhost_necklace_bronze",
        source: "The Voidspire (Raid) - Fallen-King Salhadaar",
      },
      {
        slot: "shoulders",
        itemName: "Night Ender's Pauldrons",
        itemId: 249950,
        iconName: "inv_shoulder_plate_raidwarriormidnight_d_01",
        source: "The Voidspire (Raid) - Fallen-King Salhadaar",
      },
      {
        slot: "back",
        itemName: "Adherent's Silken Shroud",
        itemId: 239656,
        iconName: "inv_cape_cloth_questbloodelf_b_01",
        source: "Crafted (Tailoring)",
      },
      {
        slot: "chest",
        itemName: "Night Ender's Breastplate",
        itemId: 249955,
        iconName: "inv_chest_plate_raidwarriormidnight_d_01",
        source: "The Dreamrift (Raid) - Chimaerus",
      },
      {
        slot: "wrist",
        itemName: "Spellbreaker's Bracers",
        itemId: 237834,
        iconName: "inv_plate_questbloodelf_b_01_bracer",
        source: "Crafted (Blacksmithing)",
      },
      {
        slot: "hands",
        itemName: "Embergrove Grasps",
        itemId: 251081,
        iconName: "inv_glove_plate_dungeonharronir_c_01",
        source: "Windrunner Spire (Dungeon)",
      },
      {
        slot: "waist",
        itemName: "Night Ender's Girdle",
        itemId: 249949,
        iconName: "inv_belt_plate_raidwarriormidnight_d_01",
        source: "Matrix Catalyst",
      },
      {
        slot: "legs",
        itemName: "Night Ender's Chausses",
        itemId: 249951,
        iconName: "inv_pant_plate_raidwarriormidnight_d_01",
        source: "The Voidspire (Raid) - Vaelgor and Ezzorak",
      },
      {
        slot: "feet",
        itemName: "Greaves of the Unformed",
        itemId: 249381,
        iconName: "inv_boot_plate_raidwarriormidnight_d_01",
        source: "The Dreamrift (Raid) - Chimaerus",
      },
      {
        slot: "ring1",
        itemName: "Eye of Midnight",
        itemId: 249920,
        iconName: "inv_12_jewelry_devouringhost_ring_bronze",
        source: "March on Quel'Danas (Raid) - Midnight Falls",
      },
      {
        slot: "ring2",
        itemName: "Occlusion of Void",
        itemId: 251217,
        iconName: "inv_12_trinket_devouring_host_currency1_bronze",
        source: "Nexus-Point Xenas (Dungeon)",
      },
      {
        slot: "main-hand",
        itemName: "Alah'endal, the Dawnsong",
        itemId: 249296,
        iconName: "inv_axe_2h_raidmidnight_d_01",
        source: "March on Quel'Danas (Raid) - Midnight Falls",
        note: "양손 무기",
      },
    ],
    trinkets: [
      {
        contentType: "raid",
        itemName: "Gaze of the Alnseer",
        itemId: 249343,
        iconName: "inv_12_trinket_raid_dreamrift_gazeofthealnseer",
        source: "The Dreamrift (Raid) - Chimaerus",
        tier: "S",
      },
      {
        contentType: "raid",
        itemName: "Heart of Ancient Hunger",
        itemId: 249342,
        iconName: "inv_12_trinket_raid_voidspire_strdps_hearthofancienthunger",
        source: "The Voidspire (Raid) - Vorasius",
        tier: "S",
      },
      {
        contentType: "raid",
        itemName: "Umbral Plume",
        itemId: 260235,
        iconName: "inv_12_dualityphoenix_void_feather",
        source: "쿠엘다나스 진격로 (레이드) - 알라르 자손 벨로렌",
        tier: "A",
      },
      {
        contentType: "raid",
        itemName: "Radiant Plume",
        itemId: 249806,
        iconName: "inv_12_dualityphoenix_holy_feather",
        source: "쿠엘다나스 진격로 (레이드) - 알라르 자손 벨로렌",
        tier: "A",
      },
      {
        contentType: "raid",
        itemName: "Light Company Guidon",
        itemId: 249344,
        iconName: "inv_12_trinket_raid_voidspire_physdps1_armyoflightbanner",
        source: "공허첨탑 (레이드) - 전제군주 아베르지안",
        tier: "A",
      },
      {
        contentType: "mythic-plus",
        itemName: "Algeth'ar Puzzle Box",
        itemId: 193701,
        iconName: "inv_misc_enggizmos_18",
        source: "Algeth'ar Academy (Dungeon)",
        tier: "S",
      },
      {
        contentType: "mythic-plus",
        itemName: "Solarflare Prism",
        itemId: 252420,
        iconName: "inv_enchant_shardbrilliantlarge",
        source: "Skyreach (Dungeon)",
        tier: "S",
      },
    ],
  },
];

export function getBisBuild(classSlug: string, specSlug: string) {
  return BIS_BUILDS.find(
    (b) => b.classSlug === classSlug && b.specSlug === specSlug
  );
}

export function getBisItemDisplayName(item: { itemId?: number; itemName: string }) {
  if (item.itemId && ITEM_TRANSLATIONS[item.itemId]) {
    return ITEM_TRANSLATIONS[item.itemId];
  }
  return item.itemName;
}

export function getBisSourceDisplay(item: { source: string }) {
  return SOURCE_TRANSLATIONS[item.source] ?? item.source;
}

export function getWowheadItemUrl(item: { itemId?: number; itemName: string }) {
  if (item.itemId) {
    return `https://www.wowhead.com/ko/item=${item.itemId}`;
  }
  return `https://www.wowhead.com/ko/items?filter=name=${encodeURIComponent(item.itemName)}`;
}

export function getWowheadIconUrl(
  iconName: string | undefined,
  size: "small" | "medium" | "large" = "medium"
): string | null {
  if (!iconName) return null;
  const clean = iconName.replace(/\.(jpg|png)$/i, "");
  return `https://wow.zamimg.com/images/wow/icons/${size}/${clean}.jpg`;
}
