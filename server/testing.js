const { controllers } = require("./controllers")
const { model } = require("./models")

const createNewUser = controllers.user.create
const enterUser = controllers.user.enter

const authDb = model.user.auth
const infoDb = model.user.info
const categoriesDb = model.user.categories

const req = {
    body: {
        name: "Alex",
        sureName: "Smidth",
        email: "algola",
        password: "123456",
        birthday: "02-01-2014",
        categories: [
            1, 2, 3
        ]
    }
}

const req1 = {
    body: {
        name: "Boris",
        sureName: "Dmitrievich",
        email: "beluga",
        password: "123456",
        birthday: "06-12-1999",
        categories: [
            2
        ]
    }
}

const status = {
    json: (mess) => console.log("answer: ", mess)
}

const res = {
    status: (value) => {
        console.log("status: ", value)
        return status
    } 
}


// TEST: проверка контроллера и сервисов создания нового пользователя
// createNewUser(req, res)
// createNewUser(req, res) // ошибка "такой пользователь уже существует"
// createNewUser(req1, res)
// console.log('authData: ', authDb)
// console.log('infoData: ', infoDb)
// console.log('categoriesData: ', categoriesDb)

const req2 = {
    body: {
        email: "algola",
        password: "123456"
    }
}

const req3 = {
    body: {
        email: "algola",
        password: "123"
    }
}

const req4 = {
    body: {
        email: "gapNew",
        password: "123456"
    }
}

// TEST: проверка контроллера и сервисов авторизацию пользователя
// createNewUser(req, res)
// enterUser(req2, res)
// enterUser(req3, res) // ошибка подтверждения владения учетной записью
// enterUser(req4, res) // ошибка пользователя не существует