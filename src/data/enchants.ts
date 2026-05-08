export type EnchantSlot =
  | "weapon"
  | "weapon-offhand"
  | "helm"
  | "shoulder"
  | "chest"
  | "wrist"
  | "legs"
  | "feet"
  | "back"
  | "ring1"
  | "ring2";

export const ENCHANT_SLOT_ORDER: EnchantSlot[] = [
  "weapon",
  "weapon-offhand",
  "helm",
  "shoulder",
  "chest",
  "wrist",
  "legs",
  "feet",
  "back",
  "ring1",
  "ring2",
];

export const ENCHANT_SLOT_LABELS: Record<EnchantSlot, string> = {
  "weapon": "무기",
  "weapon-offhand": "보조 무기",
  "helm": "머리",
  "shoulder": "어깨",
  "chest": "가슴",
  "wrist": "팔보호구",
  "legs": "다리",
  "feet": "신발",
  "back": "망토",
  "ring1": "반지 1",
  "ring2": "반지 2",
};

export type EnchantRecommendation = {
  slot: EnchantSlot;
  enchantName: string;
  itemId?: number;
  spellId?: number;
  iconName?: string;
  note?: string;
};

export type EnchantBuild = {
  classSlug: string;
  specSlug: string;
  patchVersion?: string;
  items: EnchantRecommendation[];
};

import { RARITY_COLORS, type ItemRarity } from "./bis-items";

// itemId별 등급. 등록 안 된 마법부여는 기본값(rare)으로 처리.
export const ENCHANT_RARITY: Record<number, ItemRarity> = {};

export function getEnchantColor(item: { itemId?: number }): string {
  if (item.itemId && ENCHANT_RARITY[item.itemId]) {
    return RARITY_COLORS[ENCHANT_RARITY[item.itemId]];
  }
  return RARITY_COLORS.rare;
}

// itemId → 한국어. BIS와 동일하게 동일 마법부여가 여러 직업에 재사용되므로 한 곳에 모아둠.
export const ENCHANT_ITEM_TRANSLATIONS: Record<number, string> = {
  243973: "무기 마법부여 - 광전사의 분노",
  244031: "무기 마법부여 - 비전 숙련",
  243950: "투구 마법부여 - 강화된 생기흡수의 사술",
  243962: "어깨보호구 마법부여 - 아킬존의 신속함",
  243991: "어깨보호구 마법부여 - 아미드랏실의 은혜",
  243977: "가슴보호구 마법부여 - 세계혼의 징표",
  244642: "혈기사의 방어구 강화도구",
  243952: "장화 마법부여 - 스라소니의 기민함",
  243956: "반지 마법부여 - 독수리의 눈",
};

// spellId → 한국어. itemId가 없는 캐스팅 전용 마법부여용.
export const ENCHANT_SPELL_TRANSLATIONS: Record<number, string> = {};

export const ENCHANT_BUILDS: EnchantBuild[] = [
  {
    classSlug: "warrior",
    specSlug: "fury",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Arcane Mastery",
        itemId: 244031,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
        note: "양 무기 동일 적용",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243950,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243991,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "chest",
        enchantName: "Enchant Chest - Mark of the Worldsoul",
        itemId: 243977,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "legs",
        enchantName: "Blood Knight's Armor Kit",
        itemId: 244642,
        iconName: "inv_12_profession_leatherworking_thalassian_amor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Dexterity",
        itemId: 243952,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eyes of the Eagle",
        itemId: 243956,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "warrior",
    specSlug: "arms",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Berserker's Rage",
        itemId: 243973,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243950,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243991,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "chest",
        enchantName: "Enchant Chest - Mark of the Worldsoul",
        itemId: 243977,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "legs",
        enchantName: "Blood Knight's Armor Kit",
        itemId: 244642,
        iconName: "inv_12_profession_leatherworking_thalassian_amor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Dexterity",
        itemId: 243952,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eyes of the Eagle",
        itemId: 243956,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
];

export function getEnchantBuild(classSlug: string, specSlug: string) {
  return ENCHANT_BUILDS.find(
    (b) => b.classSlug === classSlug && b.specSlug === specSlug
  );
}

export function getEnchantDisplayName(item: {
  itemId?: number;
  spellId?: number;
  enchantName: string;
}) {
  if (item.itemId && ENCHANT_ITEM_TRANSLATIONS[item.itemId]) {
    return ENCHANT_ITEM_TRANSLATIONS[item.itemId];
  }
  if (item.spellId && ENCHANT_SPELL_TRANSLATIONS[item.spellId]) {
    return ENCHANT_SPELL_TRANSLATIONS[item.spellId];
  }
  return item.enchantName;
}

export function getWowheadEnchantUrl(item: {
  itemId?: number;
  spellId?: number;
  enchantName: string;
}) {
  if (item.itemId) return `https://www.wowhead.com/ko/item=${item.itemId}`;
  if (item.spellId) return `https://www.wowhead.com/ko/spell=${item.spellId}`;
  return `https://www.wowhead.com/ko/spells?filter=na=${encodeURIComponent(item.enchantName)}`;
}
