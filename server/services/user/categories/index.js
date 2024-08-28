const { model } = require("../../../models");

const db = model.user.categories;

const get = (filter, form = db.places) => {
  return db.select(filter, form);
};

const create = (newData) => {
  return db.insert(newData);
};

const delete = (filter) => {
  return db.delete(filter);
};

const categoriesServices = {
  get,
  create,
  delete,
};

module.exports = categoriesServices;
