import utils from "../utils/utils";
import serverConnector from "../utils/serverConnector";
import getDataManager from "../managers/dataManager";

// base game stats
let stats = {
  id: utils.uuidv4(),
  game: {
    language: "en",
    money: 0,
    moneySpent: 0,
  },
  character: {
    name: utils.nameGen(),
    level: 1,
    title: "Farmer",
  },
  tutorial: {
    triggers: "TUTO_B",
    text: "Welcome to the Future Farm Lands!\nHelp us grow resources by clicking on the Hydro Farm icon!",
    open: true,
    arrow: "HYDRO_FARM.icon",
  },
  notification: {
    icon: "mines",
    text: "-----",
    open: false,
  },
  scene: {
    restart: false,
    current: "bootScene",
  },
  businesses: {
    HYDRO_FARM: {
      investments: 1,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    VERTICAL_GARDEN: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    BIO_LAB: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    CYBER_FARM: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    ECO_TOWER: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    NANO_FARM: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    SOLAR_RANCH: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    TECH_VILLAGE: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
    FUTURE_CITY: {
      investments: 0,
      manager: false,
      timeTriggered: -1,
      producing: false,
      speed: 1,
    },
  },
};

function getNames(property) {
  let names = [];
  if (typeof property !== "object") {
    return [property];
  }

  let propertyKeys = Object.keys(property);
  propertyKeys.forEach((key) => {
    let otherNames = getNames(property[key]);
    if (otherNames.length === 1) {
      names.push(key);
    } else {
      otherNames.forEach((child) => {
        names.push(`${key}.${child}`);
      });
    }
  });

  if (propertyKeys.length === 0) {
    return [property];
  }
  return names;
}

let ids = getNames(stats);

let changeListeners = {};
ids.forEach((id) => (changeListeners[id] = (_) => {}));

let setListener = (id, listener) => {
  changeListeners[id] = listener;
};

let removeListener = (id, listener) => {
  changeListeners[id] = (_) => {};
};

let get = (key, data = stats) => {
  let parts = key.split(".");
  let value = data;
  for (var i = 0; i < parts.length; i++) {
    value = value[parts[i]];
  }
  return value;
};

let set = (key, newValue) => {
  if (newValue === undefined) return;
  let parts = key.split(".");
  let value = stats;
  for (var i = 0; i < parts.length - 1; i++) {
    value = value[parts[i]];
  }
  value[parts[i]] = newValue;
  notifyListener(key, newValue);
};

let notifyListener = (key, newValue) => {
  if (changeListeners[key]) {
    changeListeners[key](newValue);
  }
};

let setAll = (key, data) => {
  let names = getNames(get(key));
  names.forEach((name) => {
    set(`${key}.${name}`, get(name, data));
  });
};

let setData = (data) => {
  let keys = Object.keys(data);
  keys.forEach((key) => {
    setAll(key, data[key]);
  });
};

// second load data from server
let syncFromServer = () => {
  // data loaded from database
  serverConnector.loadGame(stats.id, (err, data) => {
    if (data) {
      setData(data);
    }
  });
};

// first load data from local manager - fallback
let loadData = () => {
  getDataManager("dwarfEmpire");
  getDataManager("dwarfEmpire").load((err, data) => {
    if (data) {
      // data loaded from localstorage // fallback
      setData(data);
      stats.id = data.id;
      syncFromServer();
    }
  }, true);
};

loadData();

export default {
  stats,
  bs: stats.businesses,
  setListener,
  removeListener,
  notifyListener,
  get,
  set,
  setAll,
  setData,
};