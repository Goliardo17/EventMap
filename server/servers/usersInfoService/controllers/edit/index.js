const { usersInfoServices } = 
require('../../services')

const edit = (req, res) => {
  try {
    const { email } = req.user
    const editedUserInfo = req.body

    const searchUserInfo = usersInfoServices.get(email)

    if (!searchUserInfo) {
      return res.status(400).json('ошибка авторизации')
    }

    const newUserInfo = usersInfoServices.edit(editedUserInfo)

    res.status(200).json(newUserInfo)
  } catch (error) {
    res.status(400).json('надо разобраться')
  }
}

module.exports = edit