const { model } = require("../../../models");

const db = model.user.info;

const get = (filter, form = db.places) => {
  return db.select(filter, form);
};

const create = (newData) => {
  return db.insert(newData);
};

const edit = (filter, newState) => {
  return db.update(filter, newState)
}

const servicesInfo = {
  get,
  create,
  edit,
};

module.exports = servicesInfo;
