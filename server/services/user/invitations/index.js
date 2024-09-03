const { models } = require("../../../models");

const invitations = models.repo.local.entity.user.invitations;

const create = (newData) => {
  return invitations.insert(newData);
};

const get = (filter, form = invitations.places) => {
  return invitations.select(filter, form);
};

const inviteDelete = (filter) => {
  return invitations.delete(filter);
};

const invitationsServices = {
  create,
  get,
  inviteDelete,
};

module.exports = { invitationsServices };
