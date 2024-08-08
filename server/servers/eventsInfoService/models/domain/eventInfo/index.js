class EventInfo {
    constructor ({ u_code, title, discription, creator, tags, address }) {
        this.u_code = u_code
        this.title = title
        this.discription = discription
        this.creator = creator
        this.tags = tags
        this.address = address
    }
}

module.exports = { EventInfo }