const { user } = require("./entity/user");
const { event } = require("./entity/event");
const { category } = require("./entity/category");

const local = {
  entity: {
    user,
    event,
    category,
  },
};

module.exports = { local };
