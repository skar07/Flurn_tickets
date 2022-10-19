require('dotenv').config();
const { Pool, Client } = require('pg');

//If connecting using pool and env
const poolConnect = async () => {
    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASS,
        port: process.env.DB_PORT
    });
    return await pool.connect();
}

//If connecting using client and env
const clientConnect = async () => {
    const client = new Client({
        user: process.env.DB_USER,
        host: process.env.HOST,
        database: process.env.DB,
        password: process.env.PASS,
        port: process.env.DB_PORT
    });
    return await client.connect();
}

//If connecting through Connection URI
const connectStringConnect = async () => {
    const connectionString = process.env.CONNECTION_STRING;
    const client = new Client({
        connectionString
    });
    return await client.connect();
}

module.exports = { poolConnect, clientConnect, connectStringConnect };