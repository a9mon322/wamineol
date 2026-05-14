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
  244029: "무기 마법부여 - 렌도레이의 명민함",
  244021: "어깨보호구 마법부여 - 실버문의 치유",
  243983: "장화 마법부여 - 샬라드라실의 뿌리",
  244008: "장화 마법부여 - 원정순찰대의 추적",
  244016: "반지 마법부여 - 실버문의 끈기",
  244002: "가슴보호구 마법부여 - 마법학자의 징표",
  240155: "비전매듭 마법실타래",
  243959: "반지 마법부여 - 줄진의 특화",
  244007: "투구 마법부여 - 강화된 광역회피의 룬",
  243990: "어깨보호구 마법부여 - 아미드랏실의 은혜",
  244640: "숲 사냥꾼의 방어구 강화도구",
  243970: "무기 마법부여 - 잔알라이의 정밀함",
  243981: "투구 마법부여 - 강화된 속도의 축복",
  240133: "태양불꽃 비단 마법실타래",
  243987: "반지 마법부여 - 자연의 격노",
  243951: "투구 마법부여 - 강화된 생기흡수의 사술",
  244641: "숲 사냥꾼의 방어구 강화도구",
  244009: "장화 마법부여 - 원정순찰대의 추적",
  244017: "반지 마법부여 - 실버문의 끈기",
  244015: "반지 마법부여 - 실버문의 기민함",
  243953: "장화 마법부여 - 스라소니의 기민함",
  243957: "반지 마법부여 - 독수리의 눈",
  243963: "어깨보호구 마법부여 - 아킬존의 신속함",
};

// spellId → 한국어. itemId가 없는 캐스팅 전용 마법부여용.
export const ENCHANT_SPELL_TRANSLATIONS: Record<number, string> = {
  53344: "타락한 성전사의 룬",
  327082: "대재앙의 룬",
};

export const ENCHANT_BUILDS: EnchantBuild[] = [
  {
    classSlug: "paladin",
    specSlug: "retribution",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243990,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
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
    classSlug: "paladin",
    specSlug: "holy",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "chest",
        enchantName: "Enchant Chest - Mark of the Magister",
        itemId: 244002,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "legs",
        enchantName: "Arcanoweave Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Zul'jin's Mastery",
        itemId: 243959,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "paladin",
    specSlug: "protection",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
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
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Silvermoon's Tenacity",
        itemId: 244016,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "warrior",
    specSlug: "protection",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
    ],
  },
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
  {
    classSlug: "hunter",
    specSlug: "beast-mastery",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243990,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
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
    classSlug: "hunter",
    specSlug: "marksmanship",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
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
    classSlug: "rogue",
    specSlug: "subtlety",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "weapon-offhand",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243990,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
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
    classSlug: "rogue",
    specSlug: "outlaw",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Jan'alai's Precision",
        itemId: 243970,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "weapon-offhand",
        enchantName: "Enchant Weapon - Jan'alai's Precision",
        itemId: 243970,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
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
    classSlug: "rogue",
    specSlug: "assassination",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Berserker's Rage",
        itemId: 243973,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "weapon-offhand",
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
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
    classSlug: "hunter",
    specSlug: "survival",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
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
    classSlug: "priest",
    specSlug: "discipline",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "chest",
        enchantName: "Enchant Chest - Mark of the Magister",
        itemId: 244002,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "legs",
        enchantName: "Arcanoweave Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Zul'jin's Mastery",
        itemId: 243959,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "priest",
    specSlug: "holy",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "chest",
        enchantName: "Enchant Chest - Mark of the Magister",
        itemId: 244002,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "legs",
        enchantName: "Arcanoweave Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Zul'jin's Mastery",
        itemId: 243959,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "priest",
    specSlug: "shadow",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        itemId: 243990,
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
        enchantName: "Arcanoweave Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Zul'jin's Mastery",
        itemId: 243959,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "shaman",
    specSlug: "elemental",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Arcane Mastery",
        itemId: 244031,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
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
    classSlug: "shaman",
    specSlug: "enhancement",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
        note: "양손 동일",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243990,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Dexterity",
        itemId: 243952,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Zul'jin's Mastery",
        itemId: 243959,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "shaman",
    specSlug: "restoration",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
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
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "chest",
        enchantName: "Enchant Chest - Mark of the Magister",
        itemId: 244002,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "legs",
        enchantName: "Arcanoweave Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Shaladrassil's Roots",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "mage",
    specSlug: "arcane",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Arcanoweave Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
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
    classSlug: "mage",
    specSlug: "fire",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
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
    classSlug: "mage",
    specSlug: "frost",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Jan'alai's Precision",
        itemId: 243970,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Grace",
        itemId: 243990,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
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
    classSlug: "warlock",
    specSlug: "affliction",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
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
    classSlug: "warlock",
    specSlug: "demonology",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
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
    classSlug: "warlock",
    specSlug: "destruction",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
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
    classSlug: "monk",
    specSlug: "brewmaster",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243951,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Verdant Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Roots of Shaladrassil",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "monk",
    specSlug: "mistweaver",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243951,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Roots of Shaladrassil",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Silvermoon's Agility",
        itemId: 244015,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "monk",
    specSlug: "windwalker",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Verdant Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eyes of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "druid",
    specSlug: "balance",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Arcane Mastery",
        itemId: 244031,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243951,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Roots of Shaladrassil",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "druid",
    specSlug: "feral",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243951,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Verdant Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eyes of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "druid",
    specSlug: "guardian",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Berserking",
        itemId: 243973,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Hex of Leeching",
        itemId: 243951,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Verdant Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Roots of Shaladrassil",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "druid",
    specSlug: "restoration",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Acuity of the Ren'dorei",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Silvermoon's Mending",
        itemId: 244021,
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
        enchantName: "Sunfire Silk Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Roots of Shaladrassil",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "deathknight",
    specSlug: "blood",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Rune of the Fallen Crusader",
        spellId: 53344,
        iconName: "spell_holy_blessingofstrength",
        note: "죽음의기사 전용 룬조각",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243962,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244008,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Silvermoon's Tenacity",
        itemId: 244016,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "deathknight",
    specSlug: "frost",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Rune of the Fallen Crusader",
        spellId: 53344,
        iconName: "spell_holy_blessingofstrength",
        note: "죽음의기사 전용 룬조각",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
        itemId: 243990,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eyes of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "deathknight",
    specSlug: "unholy",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Rune of the Apocalypse",
        spellId: 327082,
        iconName: "spell_deathknight_thrash_ghoul",
        note: "죽음의기사 전용 룬조각",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Rune of Avoidance",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
        itemId: 243990,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244640,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eyes of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "demonhunter",
    specSlug: "havoc",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Rendorei's Acuity",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
        note: "양손 글레이브 동일",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Reinforced Mass Evasion",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eye of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "demonhunter",
    specSlug: "vengeance",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Rendorei's Acuity",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
        note: "양손 글레이브 동일",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Blessing of Speed",
        itemId: 243981,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Akil'zon's Swiftness",
        itemId: 243963,
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Farstrider's Hunt",
        itemId: 244009,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eye of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "demonhunter",
    specSlug: "predation",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Arcane Mastery",
        itemId: 244031,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
        note: "주무기",
      },
      {
        slot: "weapon-offhand",
        enchantName: "Enchant Weapon - Berserker's Fury",
        itemId: 243973,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Reinforced Mass Evasion",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Forest Hunter's Armor Kit",
        itemId: 244641,
        iconName: "inv_12_profession_leatherworking_amani_armor_kit",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Eye of the Eagle",
        itemId: 243957,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "evoker",
    specSlug: "devastation",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Rendorei's Acuity",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Reinforced Mass Evasion",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Sunflame Silken Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "evoker",
    specSlug: "augmentation",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Rendorei's Acuity",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Reinforced Mass Evasion",
        itemId: 244007,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Amirdrassil's Boon",
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
        enchantName: "Sunflame Silken Spellthread",
        itemId: 240133,
        iconName: "inv_tailoring_spellthread_orange_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Lynx's Agility",
        itemId: 243953,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Nature's Fury",
        itemId: 243987,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
        note: "양 반지 동일",
      },
    ],
  },
  {
    classSlug: "evoker",
    specSlug: "preservation",
    patchVersion: "12.0.5",
    items: [
      {
        slot: "weapon",
        enchantName: "Enchant Weapon - Rendorei's Acuity",
        itemId: 244029,
        iconName: "inv_12_profession_enchanting_enchantedvellum_purple",
      },
      {
        slot: "helm",
        enchantName: "Enchant Helm - Empowered Lifesteal",
        itemId: 243951,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "shoulder",
        enchantName: "Enchant Shoulders - Silvermoon's Healing",
        itemId: 244021,
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
        enchantName: "Arcaneknot Spellthread",
        itemId: 240155,
        iconName: "inv_12_tailoring_spellthread_violet_spellthread",
      },
      {
        slot: "feet",
        enchantName: "Enchant Boots - Roots of Shaladrassil",
        itemId: 243983,
        iconName: "inv_12_profession_enchanting_enchantedvellum_blue",
      },
      {
        slot: "ring1",
        enchantName: "Enchant Ring - Zul'jin's Mastery",
        itemId: 243959,
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
