const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "userId", "name", "sureName"];

const infoData = new Data(places);

const usersInfo = [
  { userId: 1, name: "Heather", sureName: "Harrison" },
  { userId: 2, name: "Roberta", sureName: "Davidson" },
  { userId: 3, name: "Marlene", sureName: "Hansen" },
  { userId: 4, name: "Salvador", sureName: "Wood" },
  { userId: 5, name: "Charlotte", sureName: "Rodriquez" },
];

usersInfo.forEach((info) => {
  infoData.insert(info);
});

module.exports = { infoData };
