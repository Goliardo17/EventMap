const express = require('express')
const cors = require('cors')
const usersInfoRoutes = require('./routes/usersInfoRoutes')
const PORT = 3006

const app = express()

app.use(cors)
app.use(json())

app.use('/user/info', usersInfoRoutes)

module.exports = {
    startServer: () => {
        app.listen(PORT, () => console.log(`Server start in port: ${PORT}`))
    }
}