const express = require('express')
const app = express()
const port = 5001
app.get('/', (req, res) => {
    res.send("Hello this is a test server")
})

app.listen(port, () => {
    console.log(`App is runniing on port ${port}`)
})