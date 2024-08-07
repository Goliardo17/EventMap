const express = require('express')
const cors = require('cors')
const authRoutes = require('./routes/authorizationRoutes')
const PORT = 3005

const app = express()

app.use(cors)
app.use(json())

app.use('/auth/user', authRoutes)

module.exports = {
    startServer: () => {
        app.listen(PORT, () => console.log(`Server start in port: ${PORT}`))
    }
}