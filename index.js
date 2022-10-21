const express = require('express');
const app = express()
const { poolConnect } = require('./connect')
const bodyParser = require('body-parser')

/** Middlewares */
app.use(express.json())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/** Routes */
const seatsRouter = require('./routes/seats');
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})
app.use('/api/v1/', seatsRouter)

/** Connecting to the database and logging is connected with no error */
const PORT = process.env.PORT || 3000
const start = async () => {
    try {
        const client = await poolConnect();
        const res = await client.query('SELECT current_database();')
        console.log(res.rows[0].current_database) // Log current database from returned object
        client.release()
        app.listen(PORT, () => {
            console.log(`Listening on port: ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}
start();
