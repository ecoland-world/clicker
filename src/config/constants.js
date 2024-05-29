const ZOOM = 1;
const BACKGROUND_COLOR = 0x333333;

// time in milliseconds to keep visible the "splash" scene
const TIME_SPLASH = 200;

// time in milliseconds to keep visible the "made with" scene
const TIME_MADE_WITH = 2500;

// displays the scene's title on the scene
// useful to test navigation, you can delete
// this code in the scene.js
const DISPLAY_SCENE_TITLE = false;

// loads fake files, turn on to display how the "boot"
// scene looks like
const FAKE_LOADER_ACTIVE = false;

// display stats
const RUNNING_STATS = false;

// display dat.gui plugin
const DAT_GUI_ENABLE = false;

const AFTER_BOOT_SCENE = "gameScene";
const BUSINESS_KEYS = [
  "HYDRO_FARM",
  "VERTICAL_GARDEN",
  "BIO_LAB",
  "WATER_PUMP",
  "NANO_FARM",
  "SOLAR_RANCH",
  "TECH_VILLAGE",
];

const BUSINESSES = {
  HYDRO_FARM: {
    business: "Hydro Farm",
    icon: "hydro_farm",
    sfx: "sfxHydroFarmProduce",
    cost: 373.8,
    coefficient: 1.07,
    time: 0.6,
    revenue: 100,
    managerCost: 100000,
    managerKey: "manager1",
    managerIndex: 0,
    coinsEmit: 4,
  },
  VERTICAL_GARDEN: {
    business: "Vertical Garden",
    icon: "vertical_garden",
    sfx: "sfxVerticalGardenProduce",
    cost: 6000,
    coefficient: 1.15,
    time: 3,
    revenue: 6000,
    managerCost: 1500000,
    managerKey: "manager2",
    managerIndex: 51,
    coinsEmit: 6,
  },
  BIO_LAB: {
    business: "Bio Lab",
    icon: "bio_lab",
    sfx: "sfxBioLabProduce",
    cost: 72000,
    coefficient: 1.14,
    time: 6,
    revenue: 54000,
    managerCost: 10000000,
    managerKey: "manager3",
    managerIndex: 54,
  },
  CYBER_FARM: {
    business: "Cyber Farm",
    icon: "cyber_farm",
    sfx: "sfxCyberFarmProduce",
    cost: 864000,
    coefficient: 1.13,
    time: 12,
    revenue: 432000,
    managerCost: 50000000,
    managerKey: "manager4",
    managerIndex: 0,
    coinsEmit: 10,
  },
  ECO_TOWER: {
    business: "Eco Tower",
    icon: "eco_tower",
    sfx: "sfxEcoTowerProduce",
    ccost: 10368000,
    coefficient: 1.12,
    time: 24,
    revenue: 5184000,
    managerCost: 120000000,
    managerKey: "manager6",
    managerIndex: 6,
  },
  NANO_FARM: {
    business: "Nano Farm",
    icon: "nano_farm",
    sfx: "sfxNanoFarmProduce",
    cost: 124416000,
    coefficient: 1.11,
    time: 96,
    revenue: 62208000,
    managerCost: 1000000000,
    managerKey: "manager6",
    managerIndex: 6,
    coinsEmit: 15,
  },
  SOLAR_RANCH: {
    business: "Solar Ranch",
    icon: "solar_ranch",
    sfx: "sfxSolarRanchProduce",
    cost: 1492992000,
    coefficient: 1.1,
    time: 384,
    revenue: 746496000,
    managerCost: 11111111100,
    managerKey: "manager7",
    managerIndex: 57,
    coinsEmit: 20,
  },
  TECH_VILLAGE: {
    business: "Tech Village",
    icon: "tech_village",
    sfx: "sfxTechVillageProduce",
    cost: 17915904000,
    coefficient: 1.09,
    time: 1536,
    revenue: 8957952000,
    managerCost: 55555555500,
    managerKey: "manager8",
    managerIndex: 3,
    coinsEmit: 30,
  },
  FUTURE_CITY: {
    business: "Future City",
    icon: "future_city",
    sfx: "sfxFutureCityProduce",
    cost: 214990848000,
    coefficient: 1.08,
    time: 6144,
    revenue: 107495424000,
    managerCost: 1000000000000,
    managerKey: "manager9",
    managerIndex: 54,
    coinsEmit: 50,
  },
};

const TRIGGERS = {
  TUTO_B: {
    text: "Now you can afford another hydro farmer to get more resources!\nHire them!",
    watch: "game.money",
    condition: 500,
    arrow: "HYDRO_FARM.invest",
    nextTrigger: "TUTO_C",
  },
  TUTO_C: {
    text: "Keep going!\nGrowing crops requires patience!",
    watch: "businesses.HYDRO_FARM.investments",
    condition: 2,
    keepOpen: true,
    arrow: "HYDRO_FARM.icon",
    nextTrigger: "TUTO_D",
  },
  TUTO_D: {
    text: "We can get more resources if we set up a vertical garden!\nBuild one!",
    watch: "game.money",
    condition: 5000,
    arrow: "VERTICAL_GARDEN.invest",
    nextTrigger: "TUTO_E",
  },
  TUTO_E: {
    text: "Managing farms alone is tough! Hire a manager to help!",
    watch: "game.money",
    condition: 25000,
    arrow: "HYDRO_FARM.manager",
  },
};

const TITLES = [
  "Urban Farmer",
  "Neon Grower",
  "Cyber Farmer",
  "Tech Steward",
  "Green Guardian",
  "Synth Sower",
  "Eco Harvester",
  "Future Farmer",
  "Chrome Cropper",
  "Bio Farmer",
];

export default {
  WIDTH: 640,
  HEIGHT: 1280,
  ZOOM,
  BACKGROUND_COLOR,
  FAKE_LOADER_ACTIVE,
  TIME_SPLASH,
  TIME_MADE_WITH,
  DISPLAY_SCENE_TITLE,
  RUNNING_STATS,
  DAT_GUI_ENABLE,
  AFTER_BOOT_SCENE,
  BUSINESS_KEYS,
  BUSINESSES,
  TRIGGERS,
  TITLES,
  KEY: "value",
};
