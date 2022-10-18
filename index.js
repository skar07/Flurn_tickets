const express = require('express');
const app = express()
const { Client } = require('pg')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
const seatRoute = require('./routes/seats')
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.use('api/v1/seats', seatRoute)

const PORT = process.env.PORT || 3000

const start = async () => {
    const client = new Client({
        user: process.env.USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASS,
        port: process.env.DB_PORT,
    })
    try {
        await client.connect()
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start();
