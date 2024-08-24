const { model } = require("../../../models")

const db = model.user.categories

const get = ({place, value}) => {
    return db.filter((item) => item[place] === value)
}

const create = (value) => {
    const newData = [...db]

    newData.push(value)

    db.setData(newData)
}

const categoriesData = {
    get, create
}

module.exports = categoriesData