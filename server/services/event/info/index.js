const { models } = require("../../../../models");

const eventInfo = models.repo.local.entity.event.info;

const get = (filter, form = eventInfo.places) => {
    return eventInfo.select(filter, form)
}

const create = (newData) => {
    return eventInfo.insert(newData)
}

const edit = (filter, newData) => {
    return eventInfo.update(filter, newData)
}

const info = {
  get,
  create,
  edit,
};

module.exports = { info };
