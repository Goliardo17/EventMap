const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "title"];

const info = new Data(places);

const categoryInfo = [
    { title: "bite" },
    { title: "colon" },
    { title: "red" },
    { title: "test" },
    { title: "performance" },
]

categoryInfo.forEach((category) => {
    info.insert(category)
})

module.exports = { info };
