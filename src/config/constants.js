/**
  The constants file keeps track of all the constant values
  you want to store in your game, you can add new constants
  in the exported object.

  By default all scenes have a "constants" attribute with all
  this valus loaded in the constructor.
*/

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
  "SHOVEL",
  "CLIO",
  "POULTRY",
  "JEWELERY",
  "WINERY",
  "QUEST",
  "FISHERY",
  "BATTERY",
  "REAKTOR",
];
const BUSINESSES = {
  SHOVEL: {
    business: "Garden Shovel",
    icon: "shovel",
    sfx: "sfxMinerProduce",
    cost: 373.8,
    coefficient: 1.07,
    time: 0.6,
    revenue: 100,
    managerCost: 100000,
    managerKey: "dwarf1",
    managerIndex: 0,
    coinsEmit: 4,
  },
  CLIO: {
    business: "Clio",
    icon: "clio",
    sfx: "sfxProduce",
    cost: 6000,
    coefficient: 1.15,
    time: 3,
    revenue: 6000,
    managerCost: 1500000,
    managerKey: "dwarf2",
    managerIndex: 51,
    coinsEmit: 6,
  },
  POULTRY: {
    business: "POULTRY",
    icon: "poultry",
    sfx: "sfxForgeProduce",
    cost: 72000,
    coefficient: 1.14,
    time: 6,
    revenue: 54000,
    managerCost: 10000000,
    managerKey: "dwarf2",
    managerIndex: 0,
    coinsEmit: 10,
  },
  JEWELERY: {
    business: "Jewelery",
    icon: "jewelery",
    sfx: "sfxJeweleryProduce",
    cost: 864000,
    coefficient: 1.13,
    time: 12,
    revenue: 432000,
    managerCost: 50000000,
    managerKey: "dwarf2",
    managerIndex: 6,
    coinsEmit: 12,
  },
  WINERY: {
    business: "Winery",
    icon: "winery",
    sfx: "sfxTradeProduce",
    cost: 10368000,
    coefficient: 1.12,
    time: 24,
    revenue: 5184000,
    managerCost: 120000000,
    managerKey: "dwarf1",
    managerIndex: 6,
    coinsEmit: 15,
  },
  QUEST: {
    business: "Quest",
    icon: "quest",
    sfx: "sfxQuestProduce",
    cost: 124416000,
    coefficient: 1.11,
    time: 96,
    revenue: 62208000,
    managerCost: 1000000000,
    managerKey: "dwarf2",
    managerIndex: 54,
    coinsEmit: 50,
  },
  FISHERY: {
    business: "Fishery",
    icon: "fishery",
    sfx: "sfxProduce",
    cost: 1492992000,
    coefficient: 1.1,
    time: 384,
    revenue: 746496000,
    managerCost: 11111111100,
    managerKey: "dwarf2",
    managerIndex: 57,
    coinsEmit: 20,
  },
  BATTERY: {
    business: "Battery",
    icon: "battery",
    sfx: "sfxArmyProduce",
    cost: 17915904000,
    coefficient: 1.09,
    time: 1536,
    revenue: 8957952000,
    managerCost: 55555555500,
    managerKey: "dwarf2",
    managerIndex: 3,
    coinsEmit: 30,
  },
  REAKTOR: {
    business: "Reaktor",
    icon: "reaktor",
    sfx: "sfxArmyProduce",
    cost: 214990848000,
    coefficient: 1.08,
    time: 6144,
    revenue: 107495424000,
    managerCost: 1000000000000,
    managerKey: "dwarf2",
    managerIndex: 3,
    coinsEmit: 50,
  },
};

const TRIGGERS = {
  TUTO_B: {
    text: "Now you can afford another SHOVEL Manager to get more gold!\nHire Him!",
    watch: "game.money",
    condition: 400,
    arrow: "SHOVEL.invest",
    nextTrigger: "TUTO_C",
  },
  TUTO_C: {
    text: "Keep going!\nGardening is hard work!",
    watch: "businesses.SHOVEL.investments",
    condition: 2,
    keepOpen: true,
    arrow: "SHOVEL.icon",
    nextTrigger: "TUTO_D",
  },
  TUTO_D: {
    text: "We can get more gold by selling Clio!\nBuy one!",
    watch: "game.money",
    condition: 6000,
    arrow: "CLIO.invest",
    nextTrigger: "TUTO_E",
  },
  TUTO_E: {
    text: "Tired of gardening with Shovel? Hire a foreman to do it!",
    watch: "game.money",
    condition: 100000,
    arrow: "SHOVEL.manager",
  },
};

const MANAGERS = {
  SHOVEL_A: {
    name: "Thorjbun",
    spriteKey: "dwarf1",
    spriteIndex: 0,
  },
  CLIO_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 51,
  },
  CLIO_B: {
    name: "Thorjbun",
    spriteKey: "dwarf1",
    spriteIndex: 9,
  },
  JEWELERY_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 54,
  },
  POULTRY_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 0,
  },
  QUEST_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 54,
  },
  WINERY_A: {
    name: "Thorjbun",
    spriteKey: "dwarf1",
    spriteIndex: 6,
  },
  FISHERY_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 57,
  },
  BATTERY_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 3,
  },
  REAKTOR_A: {
    name: "Thorjbun",
    spriteKey: "dwarf2",
    spriteIndex: 3,
  },
};

const TITLES = [
  "Junior Farmer",
  "Seed Sower",
  "Crop Cultivator",
  "Barnyard Boss",
  "Agro Architect",
  "Farmstead Founder",
  "Harvest Hero",
  "Field Master",
  "Ranch Ranger",
  "Farming Tycoon",
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
