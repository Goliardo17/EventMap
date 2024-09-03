const { Form } = require("../../../patterns/form");
// const { testCategories } = require("../../../places/user/categories")

const places = {
    search: {
        key: false,
        // test: testSearch,
    },
    categories: {
        key: false,
        // test: testCategories,
    },
    page: {
        key: true,
        // test: testPage,
    }
}

const filter = new Form(places)

module.exports = { filter }