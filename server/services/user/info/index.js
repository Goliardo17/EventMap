const { models } = require("../../../../models");

const userInfo = models.repo.local.entity.user.info;

const get = (filter, form = userInfo.places) => {
  return userInfo.select(filter, form);
};

const create = (newData) => {
  return userInfo.insert(newData);
};

const edit = (filter, newData) => {
  return userInfo.update(filter, newData);
};

const info = {
  get,
  create,
  edit,
};

module.exports = { info };
