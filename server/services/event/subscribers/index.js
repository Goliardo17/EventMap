const { models } = require("../../../models");

const subscribers = models.repo.local.entity.event.subscribers;

const create = (newData) => {
  return subscribers.insert(newData);
};

const get = (filter, form = subscribers.places) => {
  return subscribers.select(filter, form);
};

const subDelete = (filter) => {
  return subscribers.delete(filter);
};

const subscribersServices = {
  create, get, subDelete
}

module.exports = { subscribersServices }