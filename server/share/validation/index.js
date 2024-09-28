const { newUser } = require("./forms/user/new");
const { enterUser } = require("./forms/user/enter");

const validation = {
  user: {
    newUser,
    enterUser,
  },
  event: {
    filter: () => false
  }
};

module.exports = { validation };
