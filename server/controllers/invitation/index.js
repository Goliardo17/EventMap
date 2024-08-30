const { getByUserId } = require("./getByUserId");
const { getByEventId } = require("./getByEventId");
const { inviteDelete } = require("./delete");
const { invite } = require("./invite");

const invitationControllers = {
  invite,
  delete: inviteDelete,
  getByUserId,
  getByEventId,
};

module.exports = { invitationControllers };
