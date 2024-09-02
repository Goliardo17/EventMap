const { newUser } = require("./forms/user/new");
const { newUser } = require("./forms/user/enter");

const validation = {
  user: {
    newUser,
    enterUser,
  },
};

module.exports = { validation };
