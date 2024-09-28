const { models } = require("../../../models");

const categoryInfo = models.repo.local.entity.category.info;

const get = (filter, form = categoryInfo.places) => {
  return categoryInfo.select(filter, form);
};

module.exports = { get };
