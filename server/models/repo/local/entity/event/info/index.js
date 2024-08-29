const { Data } = require("../../../helpers/data/index.js");

const places = ["id", "userId", "title"];

const info = new Data(places);

const events = [
    { userId: 1, title: "Shanahan, Wuckert and Schinner"},
    { userId: 1, title: "Hickle PLC"},
    { userId: 2, title: "Goodwin-Becker"},
    { userId: 2, title: "Boyer and Sons"},
    { userId: 3, title: "Steuber and Medhurst"},
    { userId: 3, title: "Schroeder Inc"},
    { userId: 4, title: "Conn and Stokes"},
    { userId: 4, title: "Durgan-VonRueden"},
    { userId: 5, title: "Satterfield and Runte"},
    { userId: 5, title: "Jast-Trantow"},
]

events.forEach((event) => {
    info.insert(event)
})

module.exports = { info };
