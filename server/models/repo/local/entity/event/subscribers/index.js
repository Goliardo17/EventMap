const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "eventId", "userId"];

const subscribers = new Data(places);

const data = [{ evetId: 1, userId: 1 }];

data.forEach((item) => {
  subscribers.insert(item);
});

module.exports = { subscribers };
