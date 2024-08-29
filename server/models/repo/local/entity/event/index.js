const { info } = require("./info");
const { categories } = require("./categories");
const { subscribers } = require("./subscribers");

const event = {
  info,
  categories,
  subscribers,
};

module.exports = { event };
