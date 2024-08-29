const { model } = require("../../../models");

const db = model.user.auth;

const get = (filter, form = db.places) => {
  return db.select(filter, form);
};

const create = (data) => {
  return db.insert(data);
};

const edit = (filter, newState) => {
  return db.update(filter, newState);
};

const authData = {
  get,
  create,
  edit,
};

module.exports = authData;
