const {create} = require("./create")
const {get} = require("./get")
const {edit} = require("./edit")
const {getByCreator} = require("./getByCreator")
const {all} = require("./all")

const eventControllers = {
  create,
  get,
  edit,
  getByCreator,
  all,
};

module.exports = { eventControllers };
