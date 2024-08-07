const { authServices } = require("../../services/index");

const appoint = (req, res) => {
  try {
    const appointForm = req.body
    const manager = req.user.email

    const verificate = authServices.get(manager)

    if (verificate.role !== 'CREATOR' && verificate.role !== 'ADMIN' && verificate.role !== 'MODERATOR') return res.status(400).json('вы самозванец')
      
    if (appointForm.role === 'ADMIN' && verificate.role !== 'CREATOR') return res.status(400).json('самый умный?')
    
    if (appointForm.role === 'MODERATOR' && verificate.role === 'MODERATOR') return res.status(400).json('а жаренных гвоздей не хочешь')

    const user = authServices.get(appointForm.user)

    user.role = appointForm.role

    authServices.edit(user)

    res.status(200).json('все ок')
  } catch (error) {
    res.status(400).json('надо разбираться')
  }
};

module.exports = appoint;
