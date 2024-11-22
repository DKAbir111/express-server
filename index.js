const express = require('express');
const coupons = require('./data.json')
const app = express();
const port = 5001;

app.get('/', (req, res) => {
    res.send("Welcome to my API server!")
})

app.get('/coupons', (req, res) => {
    res.send(coupons);
})

app.get('/coupon/:id', (req, res) => {
    const id = req.params.id
    res.send(coupons.find(coupon => coupon._id === id))
})
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})