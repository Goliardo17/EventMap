const { userControllers } = require("./user");
const { eventControllers } = require("./user");

const controllers = {
  user: userControllers,
  event: eventControllers,
};

module.exports = { controllers };
