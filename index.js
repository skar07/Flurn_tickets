const express = require('express');
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
const seatRoute = require('./routes/seats')
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API'})
})
app.use('api/v1/seats', seatRoute)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})