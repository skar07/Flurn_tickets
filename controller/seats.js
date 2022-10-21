require('dotenv').config()
const { poolConnect } = require('../connect')

const getSample = async(req, res) => {
    const pool = await poolConnect();
    pool.query('SELECT current_database();', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}
const getSeat = async (req, res) => {
    const pool = await poolConnect();
    pool.query('SELECT * FROM seats ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getSeatPricing = async (req, res) => {
    const pool = await poolConnect();
    const id = parseInt(req.params.id)
    pool.query('SELECT * FROM seats WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const createBooking = async (req, res) => {
    const { seatID, name, phone } = req.body;

    pool.query('INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *', [name, email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: ${results.rows[0].id}`)
    })
}

module.exports = {
    getSample,
    getSeat,
    getSeatPricing,
    createBooking
}
