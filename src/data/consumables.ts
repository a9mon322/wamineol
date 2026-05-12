import { RARITY_COLORS, type ItemRarity } from "./bis-items";

export type ConsumableCategory =
  | "flask"
  | "combat-potion"
  | "healing-potion"
  | "feast"
  | "food"
  | "weapon-oil"
  | "augment-rune";

export const CONSUMABLE_CATEGORY_ORDER: ConsumableCategory[] = [
  "flask",
  "combat-potion",
  "healing-potion",
  "feast",
  "food",
  "weapon-oil",
  "augment-rune",
];

export const CONSUMABLE_CATEGORY_LABELS: Record<ConsumableCategory, string> = {
  "flask": "플라스크",
  "combat-potion": "전투 물약",
  "healing-potion": "회복 물약",
  "feast": "잔치",
  "food": "개인 음식",
  "weapon-oil": "무기 오일",
  "augment-rune": "증강 룬",
};

export type ConsumableRecommendation = {
  category: ConsumableCategory;
  itemName: string;
  itemId?: number;
  iconName?: string;
  note?: string;
};

export type ConsumableBuild = {
  classSlug: string;
  specSlug: string;
  patchVersion?: string;
  items: ConsumableRecommendation[];
};

// itemId → 한국어. 동일 도핑이 여러 직업에 재사용되므로 한 곳에 모아둠.
export const CONSUMABLE_TRANSLATIONS: Record<number, string> = {
  241326: "무너진 태양의 영약",
  241322: "마법학자의 영약",
  241288: "무모함의 물약",
  241305: "실버문 생명력 물약",
  255846: "하란다르 기념상",
  242275: "왕실 구이",
  243733: "탈라시안 불사조 기름",
  259085: "공허에 물든 증강의 룬",
  241308: "빛의 잠재력",
  242274: "용사의 도시락",
  241301: "빛주입 마나 물약",
  242747: "든든한 왕실 구이",
  255845: "실버문 대연회상",
  241325: "혈기사의 영약",
  241320: "탈라시안 저항력의 영약",
  242272: "쿠엘도레이 잡탕",
  241292: "날뛰는 방종의 비약",
  241304: "실버문 생명력 물약",
  243734: "탈라시안 불사조 기름",
  241324: "혈기사의 영약",
  241300: "빛주입 마나 물약",
  241302: "공허장막 용액",
  266996: "든든한 하란다르 기념상",
};

// itemId → 등급. 등급별 색상 표시용. 등록 안 된 도핑은 기본값(rare)으로 처리.
export const CONSUMABLE_RARITY: Record<number, ItemRarity> = {
  241326: "common",   // Flask of the Shattered Sun
  241322: "common",   // Flask of the Magisters
  241288: "common",   // Potion of Recklessness
  241305: "common",   // Silvermoon Health Potion
  255846: "rare",     // Harandar Celebration
  242275: "rare",     // Royal Roast
  243733: "uncommon", // Thalassian Phoenix Oil
  259085: "rare",     // Void-Touched Augment Rune
  241308: "common",   // Light's Potential
  242274: "rare",     // Champion's Bento
  241301: "common",   // Lightfused Mana Potion
  242747: "rare",     // Hearty Royal Roast
  255845: "rare",     // Silvermoon Parade
  241325: "common",   // Flask of the Blood Knights
  241320: "common",   // Flask of Thalassian Resistance
  242272: "rare",     // Quel'dorei Medley
  241292: "common",   // Draught of Rampant Abandon
  241304: "common",   // Silvermoon Health Potion (variant)
  243734: "uncommon", // Thalassian Phoenix Oil (Mistweaver/Monk variant)
  241324: "common",   // Flask of the Blood Knights (Mistweaver/Windwalker variant)
  241300: "common",   // Lightfused Mana Potion (Mistweaver variant)
  241302: "common",   // Void-Veil Tincture
  266996: "rare",     // Hearty Harandar Celebration
};

export const CONSUMABLE_BUILDS: ConsumableBuild[] = [
  {
    classSlug: "paladin",
    specSlug: "retribution",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "paladin",
    specSlug: "holy",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Lightfused Mana Potion",
        itemId: 241301,
        iconName: "inv_12_profession_alchemy_lightpotion_blue",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "paladin",
    specSlug: "protection",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_red--",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "warrior",
    specSlug: "protection",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_red--",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Champion's Bento",
        itemId: 242274,
        iconName: "inv_misc_food_vendor_poundedricecake_1",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "warrior",
    specSlug: "fury",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Potion of Recklessness",
        itemId: 241288,
        iconName: "inv_12_profession_alchemy_voidpotion_red",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
        note: "양 무기 적용",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "warrior",
    specSlug: "arms",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_red--",
      },
      {
        category: "combat-potion",
        itemName: "Potion of Recklessness",
        itemId: 241288,
        iconName: "inv_12_profession_alchemy_voidpotion_red",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "hunter",
    specSlug: "marksmanship",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "hunter",
    specSlug: "survival",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "hunter",
    specSlug: "beast-mastery",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "rogue",
    specSlug: "subtlety",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Blood Knights",
        itemId: 241325,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_white-",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "rogue",
    specSlug: "outlaw",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Potion of Recklessness",
        itemId: 241288,
        iconName: "inv_12_profession_alchemy_voidpotion_red",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "rogue",
    specSlug: "assassination",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Potion of Recklessness",
        itemId: 241288,
        iconName: "inv_12_profession_alchemy_voidpotion_red",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "priest",
    specSlug: "discipline",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Lightfused Mana Potion",
        itemId: 241301,
        iconName: "inv_12_profession_alchemy_lightpotion_blue",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "priest",
    specSlug: "holy",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Lightfused Mana Potion",
        itemId: 241301,
        iconName: "inv_12_profession_alchemy_lightpotion_blue",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "priest",
    specSlug: "shadow",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "shaman",
    specSlug: "elemental",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "shaman",
    specSlug: "enhancement",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
        note: "폭풍인도자는 혈기사의 영약(가속)",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "shaman",
    specSlug: "restoration",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Lightfused Mana Potion",
        itemId: 241301,
        iconName: "inv_12_profession_alchemy_lightpotion_blue",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "mage",
    specSlug: "arcane",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of Thalassian Resistance",
        itemId: 241320,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_yellow",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Quel'dorei Medley",
        itemId: 242272,
        iconName: "inv_cooking_10_draconicdelicacies",
      },
      {
        category: "food",
        itemName: "Champion's Bento",
        itemId: 242274,
        iconName: "inv_misc_food_vendor_poundedricecake_1",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "mage",
    specSlug: "fire",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of Thalassian Resistance",
        itemId: 241320,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_yellow",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Quel'dorei Medley",
        itemId: 242272,
        iconName: "inv_cooking_10_draconicdelicacies",
      },
      {
        category: "food",
        itemName: "Champion's Bento",
        itemId: 242274,
        iconName: "inv_misc_food_vendor_poundedricecake_1",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "mage",
    specSlug: "frost",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Shattered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Potion of Recklessness",
        itemId: 241288,
        iconName: "inv_12_profession_alchemy_voidpotion_red",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "warlock",
    specSlug: "affliction",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
        note: "최대 데미지는 날뛰는 방종의 비약 (자해 위험)",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Champion's Bento",
        itemId: 242274,
        iconName: "inv_misc_food_vendor_poundedricecake_1",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "warlock",
    specSlug: "demonology",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
        note: "최대 데미지는 날뛰는 방종의 비약 (자해 위험)",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Champion's Bento",
        itemId: 242274,
        iconName: "inv_misc_food_vendor_poundedricecake_1",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "warlock",
    specSlug: "destruction",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Magisters",
        itemId: 241322,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_black",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
        note: "최대 데미지는 날뛰는 방종의 비약 (자해 위험)",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241305,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Champion's Bento",
        itemId: 242274,
        iconName: "inv_misc_food_vendor_poundedricecake_1",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243733,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "monk",
    specSlug: "brewmaster",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Sundered Sun",
        itemId: 241326,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_red--",
      },
      {
        category: "combat-potion",
        itemName: "Light's Potential",
        itemId: 241308,
        iconName: "inv_12_profession_alchemy_lightpotion_yellow",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241304,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Silvermoon Parade",
        itemId: 255845,
        iconName: "inv_tradeskill_cooking_feastofblood",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243734,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
  {
    classSlug: "monk",
    specSlug: "mistweaver",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Blood Knights",
        itemId: 241324,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_white-",
      },
      {
        category: "combat-potion",
        itemName: "Lightfused Mana Potion",
        itemId: 241300,
        iconName: "inv_12_profession_alchemy_lightpotion_blue",
        note: "쐐기에서는 처리량용 무모함의 물약 (241288)도 사용",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241304,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Hearty Harandar Celebration",
        itemId: 266996,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Hearty Royal Roast",
        itemId: 242747,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243734,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
    ],
  },
  {
    classSlug: "monk",
    specSlug: "windwalker",
    patchVersion: "12.0.5",
    items: [
      {
        category: "flask",
        itemName: "Flask of the Blood Knights",
        itemId: 241324,
        iconName: "inv_12_profession_alchemy_flask_sindoreipotion_white-",
      },
      {
        category: "combat-potion",
        itemName: "Potion of Unhinged Ferocity",
        itemId: 241288,
        iconName: "inv_12_profession_alchemy_voidpotion_red",
      },
      {
        category: "healing-potion",
        itemName: "Silvermoon Health Potion",
        itemId: 241304,
        iconName: "inv_12_profession_alchemy_lightpotion_orange",
      },
      {
        category: "feast",
        itemName: "Harandar Celebration",
        itemId: 255846,
        iconName: "inv_misc_1h_soup_b_01_misc_1h_soup_b_01",
      },
      {
        category: "food",
        itemName: "Royal Roast",
        itemId: 242275,
        iconName: "inv_cooking_100_roastduck",
      },
      {
        category: "weapon-oil",
        itemName: "Thalassian Phoenix Oil",
        itemId: 243734,
        iconName: "inv_12_profession_enchanting_manaoil_red",
      },
      {
        category: "augment-rune",
        itemName: "Void-Touched Augment Rune",
        itemId: 259085,
        iconName: "inv_10_enchanting_crystal_color2",
      },
    ],
  },
];

export function getConsumableBuild(classSlug: string, specSlug: string) {
  return CONSUMABLE_BUILDS.find(
    (b) => b.classSlug === classSlug && b.specSlug === specSlug
  );
}

export function getConsumableDisplayName(item: {
  itemId?: number;
  itemName: string;
}) {
  if (item.itemId && CONSUMABLE_TRANSLATIONS[item.itemId]) {
    return CONSUMABLE_TRANSLATIONS[item.itemId];
  }
  return item.itemName;
}

export function getConsumableColor(item: { itemId?: number }): string {
  if (item.itemId && CONSUMABLE_RARITY[item.itemId]) {
    return RARITY_COLORS[CONSUMABLE_RARITY[item.itemId]];
  }
  return RARITY_COLORS.rare;
}

export function getWowheadConsumableUrl(item: { itemId?: number; itemName: string }) {
  if (item.itemId) return `https://www.wowhead.com/ko/item=${item.itemId}`;
  return `https://www.wowhead.com/ko/items?filter=name=${encodeURIComponent(item.itemName)}`;
}
