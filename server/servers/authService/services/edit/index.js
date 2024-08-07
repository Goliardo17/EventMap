const { usersRepo } = require('../../models/repo')

const edit = (editedUser) => usersRepo.map((user) => {
    if (user.id === editedUser.id) {
        return editedUser
    }

    return user
})

module.exports = edit