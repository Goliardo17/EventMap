const { usersRepo } = require('../../models/repo')
const { User } = require('../../models/domain')

const create = ({ name, password }) => {
    const id = usersRepo.length

    const newUser = new User(name, password)

    usersRepo.push({id, ...newUser})
}

module.exports = create