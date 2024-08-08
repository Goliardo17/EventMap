const { usersInfoRepo } = require('../../models/repo/usersInfoRepo')

const edit = (userInfo) => {
  return usersInfoRepo.map((info) => {
    if (info.email === userInfo.email) {
      return userInfo
    }

    return info
  })
}

module.exports = edit