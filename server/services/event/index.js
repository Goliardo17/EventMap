const { info } = require("./info");
const { categories } = require("./categories");
const { subscribersServices } = require("./subscribers")

const eventServices = {
  info,
  categories,
  subscribers: subscribersServices
};

module.exports = { eventServices };
