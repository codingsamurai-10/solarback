const buyOrder = (req, res, next) => {
    res.send("buying");
}

const sellOrder = (req, res, next) => {
    res.send("selling");
}

module.exports = { buyOrder, sellOrder };