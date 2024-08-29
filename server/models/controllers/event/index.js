const {create} = require("./create")
const {get} = require("./get")
const {edit} = require("./edit")
const {getByCreator} = require("./getByCreator")

const eventControllers = {
  create,
  get,
  edit,
  getByCreator,
};

module.exports = { eventControllers };
