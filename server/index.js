const express = require('express')
const userRoutes = require("./routes/user")

const app = express()

app.use('/user', userRoutes)

app.listen(3001, () => console.log('The server has been started in port 3001'))