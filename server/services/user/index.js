const auth = require("./auth")
const info = require("./info")
const categories = require("./categories")

const userServices = {
    auth,
    info,
    categories
}

module.exports = userServices