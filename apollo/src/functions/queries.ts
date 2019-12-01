'use strict'
import { createPool } from './postgres'

const pool = createPool()

export async function getAllUsers() {
    const client = await pool.connect()
    try {
        const res = await client.query('SELECT * FROM users')
        return res.rows
    } catch (error) {
        return error
    } finally {
        client.release()
    }
}
