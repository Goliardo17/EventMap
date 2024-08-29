const { eventServices } = require("./event");
const { userServices } = require("./user");
const { categoryServices } = require("./category");

const services = {
  user: userServices,
  event: eventServices,
  category: categoryServices,
};

module.exports = { services };
