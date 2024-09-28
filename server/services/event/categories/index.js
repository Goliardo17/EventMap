const { models } = require("../../../models");

const eventCategories = models.repo.local.entity.event.info;

const get = (filter, form = eventCategories.places) => {
    return eventCategories.select(filter, form)
}

const create = (newData) => {
    return eventCategories.insert(newData)
}

const deletePlaces = (filter) => {
    return eventCategories.update(filter)
}

const categories = {
  get,
  create,
  deletePlaces,
};

module.exports = { categories };