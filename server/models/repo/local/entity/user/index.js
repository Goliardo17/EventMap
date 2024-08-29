const { authData } = require("./auth");
const { infoData } = require("./info");
const { categoriesData } = require("./categories");
const { invitations } = require("./invitations");

const user = {
  auth: authData,
  info: infoData,
  categories: categoriesData,
  invitations,
};

module.exports = { user };
