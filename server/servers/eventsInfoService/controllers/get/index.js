const { eventsInfoServices } = require('../../services')

const get = (req, res) => {
    try {
        const { email } = req.user
        const filters = req.query

        const events = eventsInfoServices.get(filters)

        res.status(200).json(events)
    } catch (error) {
        res.status(400).json('надо разбираться')
    }
}

module.exports = get