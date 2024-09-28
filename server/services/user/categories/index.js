const { models } = require("../../../../models");

const userCategories = models.repo.local.entity.user.categories;

const get = (filter, form = userCategories.places) => {
  return userCategories.select(filter, form);
};

const create = (newData) => {
  return userCategories.insert(newData);
};

const deletePlace = (filter) => {
  return userCategories.delete(filter);
};

const categories = {
  get,
  create,
  deletePlace,
};

module.exports = { categories };
