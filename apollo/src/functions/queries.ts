'use strict';
import { createPool } from './postgres';
import { PoolClient, QueryResult, types } from 'pg';

const pool = createPool();

export async function getAllUsers() {
    const client: PoolClient = await pool.connect();
    try {
        const res: QueryResult = await client.query('SELECT * FROM users');
        console.log(res)
        return res.rows
    } catch (error) {
        console.log(error)
        return error
    }
}
