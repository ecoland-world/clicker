var nm1 = [
  "Eldon",
  "Rufus",
  "Silas",
  "Cyrus",
  "Thorne",
  "Orin",
  "Asher",
  "Talon",
  "Rowan",
  "Wyatt",
  "Finn",
  "Jasper",
  "Leif",
  "Milo",
  "Reed",
  "Cedar",
  "Hawk",
  "Grove",
];

var nm2 = [
  "Greenfield",
  "Meadows",
  "Woods",
  "Rivers",
  "Stone",
  "Clay",
  "Hill",
  "Brook",
  "Valley",
  "Thicket",
  "Grove",
  "Lake",
  "Forest",
  "Blossom",
  "Glen",
  "Frost",
  "Wilder",
  "Briar",
];

function nameGen() {
  let rnd2 = Math.floor(Math.random() * nm2.length);
  let rnd = Math.floor(Math.random() * nm1.length);
  return nm1[rnd] + " " + nm2[rnd2];
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const millionUnits = ["", "million", "billion", "trillion", "quatrillion"];

function parseGold(gold) {
  let value = gold;
  let million = 0;
  if (value > 1000000) {
    value /= 1000000;
    million += 1;
    while (value / 1000 > 1) {
      value /= 1000;
      million += 1;
    }
  }
  return {
    value: formatter.format(value),
    units: millionUnits[million],
  };
}

export default {
  uuidv4,
  parseGold,
  nameGen,
};
