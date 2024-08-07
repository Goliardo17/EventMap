const create = require('./create')
const baned = require('./baned')
const disabling = require('./disabling')
const logIn = require('./logIn')
const appoint = require('./appoint')

const authControllers = {
    create,
    baned,
    disabling,
    logIn,
    appoint
}

module.exports = { authControllers }