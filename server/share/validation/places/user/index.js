const {testEmail} = require("./email")
const {testPassword} = require("./password")
const {testName} = require("./name")
const {testSureName} = require("./sureName")
const {testBirthday} = require("./birthday")

const user = {
    testEmail,
    testPassword,
    testName,
    testSureName,
    testBirthday
}

module.exports = { user }