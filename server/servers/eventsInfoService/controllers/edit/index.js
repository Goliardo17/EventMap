const { eventsInfoServices } = require('../../services')

const edit = (req, res) => {
    try {
        const { email } = req.user
        const eventInfo = req.body

        // validation
        // baned user ?
        // event ?

        res.status(200).json(newEvent)
    } catch (error) {
        res.status(400).json('надо разбираться')
    }
}

module.exports = edit