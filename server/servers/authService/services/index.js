const create = require('./create')
const get = require('./get')
const edir = require('./edit')

const authServices = {
    get,
    create,
    edit
}

module.exports = { authServices }