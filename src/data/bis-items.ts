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
  itemNameKo?: string;
  itemId?: number;
  iconName?: string;
  source: string;
  sourceKo?: string;
  note?: string;
};

export type BisContentType = "mythic-plus" | "raid";

export type BisTrinket = {
  contentType: BisContentType;
  itemName: string;
  itemNameKo?: string;
  itemId?: number;
  iconName?: string;
  source: string;
  sourceKo?: string;
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
        source: "Raid Drop",
        tier: "A",
      },
      {
        contentType: "raid",
        itemName: "Radiant Plume",
        itemId: 249806,
        iconName: "inv_12_dualityphoenix_holy_feather",
        source: "Raid Drop",
        tier: "A",
      },
      {
        contentType: "raid",
        itemName: "Crucible of Erratic Energies",
        itemId: 264507,
        iconName: "inv_112_raidtrinkets_etherealenergystoragebattery_gold",
        source: "Raid Drop",
        tier: "A",
      },
      {
        contentType: "raid",
        itemName: "Light Company Guidon",
        itemId: 249344,
        iconName: "inv_12_trinket_raid_voidspire_physdps1_armyoflightbanner",
        source: "Raid Drop",
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
      {
        contentType: "mythic-plus",
        itemName: "Umbral Plume",
        itemId: 260235,
        iconName: "inv_12_dualityphoenix_void_feather",
        source: "Mythic+ Drop",
        tier: "A",
      },
      {
        contentType: "mythic-plus",
        itemName: "Radiant Plume",
        itemId: 249806,
        iconName: "inv_12_dualityphoenix_holy_feather",
        source: "Mythic+ Drop",
        tier: "A",
      },
    ],
  },
];

export function getBisBuild(classSlug: string, specSlug: string) {
  return BIS_BUILDS.find(
    (b) => b.classSlug === classSlug && b.specSlug === specSlug
  );
}

export function getBisItemDisplayName(item: { itemName: string; itemNameKo?: string }) {
  return item.itemNameKo ?? item.itemName;
}

export function getBisSourceDisplay(item: { source: string; sourceKo?: string }) {
  return item.sourceKo ?? item.source;
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
