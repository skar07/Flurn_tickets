const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
const PORT = process.env.PORT || 3000

app.listen(PORN, () => {
    console.log(`Listening on port: ${PORT}`)
})