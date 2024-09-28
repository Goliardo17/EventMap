const { models } = require("../../../models");

const userAuth = models.repo.local.entity.user.auth;

const get = (filter, form = userAuth.places) => {
  return userAuth.select(filter, form);
};

const create = (newData) => {
  return userAuth.insert(newData);
};

const edit = (filter, newData) => {
  return userAuth.update(filter, newData);
};

const auth = {
  get,
  create,
  edit,
};

module.exports = { auth };
