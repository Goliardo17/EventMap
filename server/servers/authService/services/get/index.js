const { usersRepo } = require('../../models/repo')

const get = ({ email }) => usersRepo.find((user) => user.email === email)

module.exports = get