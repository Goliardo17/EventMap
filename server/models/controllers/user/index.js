const { create } = require("./create");
const { enter } = require("./enter");
const { edit } = require("./edit");
const { get } = require("./get");

const userControllers = {
  create,
  enter,
  edit,
  get,
};

module.exports = { userControllers };
