const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "eventId", "userId"];

const subscribers = new Data(places);

const data = [
  { eventId: 1, userId: 2 },
  { eventId: 1, userId: 3 },
  { eventId: 2, userId: 3 },
  { eventId: 2, userId: 1 },
];

data.forEach((item) => {
  subscribers.insert(item);
});

module.exports = { subscribers };
