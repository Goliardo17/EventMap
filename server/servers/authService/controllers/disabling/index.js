const { authServices } = require("../../services/index");

const disabling = (req, res) => {
  try {
    const disableForm = req.body
    const manager = req.user.email

    const verificate = authServices.get(manager)

    if (verificate.role !== 'CREATOR' && verificate.role !== 'ADMIN' && verificate.role !== 'MODERATOR') return res.status(400).json('иди ка лесом')

    if (verificate.role === 'MODERATOR') return res.status(400).json('ты пока маленький')
    
    const user = authServices.get(disableForm.user)

    user.disable = !user.disable

    authServices.edit(user)

    res.status(200).json('все ок')
  } catch (error) {
    res.status(400).json('надо разбираться')
  }
};

module.exports = disabling;