const { eventsInfoServices } = require('../../services')

const create = (req, res) => {
    try {
        const { email } = req.user
        const eventInfo = req.body

        // validation
        // baned user ?
        
        eventsInfoServices.create({email, ...eventInfo})
    
        res.status(200).json('все ок')
    } catch (error) {
        res.status(400).json('надо разбираться')
    }
}

module.exports = create