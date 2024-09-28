const express = require('express')
const cors = require("corse")

const userRoutes = require("./routes/user")
const eventRoutes = require("./routes/event")

const app = express()

app.use(cors())
app.use(express.json())
app.use('/user', userRoutes)
app.use('/event', eventRoutes)

app.listen(3001, () => console.log('The server has been started in port 3001'))