const { usersInfoServices } = 
require('../../services')
const { UserInfo } = require('../../models/domain/userInfo')

const get = (req, res) => {
  try {
    const { email } = req.user

    const userInfo = usersInfoServices.get(email)

    if (!userInfo) {
      const newUserInfo = new UserInfo({email})
      usersInfoServices.create(newUserInfo)

      return res.status(200).json(newUserInfo)
    }

    res.status(200).json(userInfo)
  } catch (error) {
    res.status(400).json('надо разобраться')
  }
}

module.exports = get