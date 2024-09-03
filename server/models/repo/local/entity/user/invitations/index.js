const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "userId", "eventId", "agree"];

const invitations = new Data(places);

const data = [
  { eventId: 1, userId: 2, agree: true },
  { eventId: 1, userId: 3, agree: false },
  { eventId: 2, userId: 3, agree: true },
  { eventId: 2, userId: 1, agree: false },
  { eventId: 3, userId: 1, agree: true },
];

data.forEach((item) => {
  invitations.insert(item);
});

module.exports = { invitations };
