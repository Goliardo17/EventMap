const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "userId", "eventId", "agree"];

const invitations = new Data(places);

const data = [{ userId: 1, evetId: 1, agree: false }];

data.forEach((item) => {
  invitations.insert(item);
});

module.exports = { invitations };
