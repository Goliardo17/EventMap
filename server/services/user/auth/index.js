const { model } = require("../../../models")

const db = model.user.auth

const get = ({place, value}) => {
    return db.filter((item) => item[place] === value)
}

const create = (value) => {
    if (!value?.email || !value?.password) {
        throw new Error ({ message: 'Отсутствуют необходимые поля'})
        return
    }

    const newData = [...db]

    const lastId = db.getLastId()

    const id = lastId ? lastId + 1 : 1

    newData.push({id, ...value})

    db.setData(newData)
}

const authData = {
    get, create
}

module.exports = authData