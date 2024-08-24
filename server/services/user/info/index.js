const { model } = require("../../../models")

const db = model.user.info

const get = ({place, value}) => {
    return db.filter((item) => item[place] === value)
}

const create = (value) => {
    const newData = [...db]

    newData.push(value)

    db.setData(newData)
}

const infoData = {
    get, create
}

module.exports = infoData