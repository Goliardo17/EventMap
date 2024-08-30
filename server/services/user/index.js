const { auth } = require("./auth");
const { info } = require("./info");
const { categories } = require("./categories");
const { invitationsServices } = require("./invitations");

const userServices = {
  auth,
  info,
  categories,
  invitations: invitationsServices,
};

module.exports = { userServices };
