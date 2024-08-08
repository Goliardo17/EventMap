const express = require('express')
const cors = require('cors')
const eventsInfoRoutes = require('./routes/eventsInfoRoutes')
const PORT = 3007

const app = express()

app.use(cors)
app.use(json())

app.use('/events/info', eventsInfoRoutes)

module.exports = {
    startServer: () => {
        app.listen(PORT, () => console.log(`Server start in port: ${PORT}`))
    }
}