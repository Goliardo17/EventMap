const get = require('./get/index.js')
const create = require('./create/index.js')
const edit = require('./edit/index.js')

const eventsInfoControllers = {
    get, create, edit
}

module.exports = { eventsInfoControllers }