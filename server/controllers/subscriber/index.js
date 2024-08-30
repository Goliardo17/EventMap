const { getByUserId } = require("./getByUserId");
const { getByEventId } = require("./getByEventId");
const { subscribe } = require("./subscribe");
const { subDelete } = require("./delete");
const { unsubscribe } = require("./unsubscribe")

const subscriberControllers = {
  getByUserId,
  getByEventId,
  subscribe,
  delete: subDelete,
  unsubscribe,
};

module.exports = { subscriberControllers };
