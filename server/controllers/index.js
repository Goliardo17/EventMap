const { userControllers } = require("./user");
const { eventControllers } = require("./event");
const { subscriberControllers } = require("./subscriber");
const { invitationControllers } = require("./invitation");

const controllers = {
  user: userControllers,
  event: eventControllers,
  subscriber: subscriberControllers,
  invitation: invitationControllers,
};

module.exports = { controllers };
