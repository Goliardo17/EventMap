const { usersRepo } = require('../models/repo/usersRepo')

const get = (email) => {
  return usersRepo.find((info) => info.email === email)
}

module.exports = get