'use strict'
import { Pool } from 'pg'

export const createPool = () => {
    const poolConfiguration = {
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT!),
    }

    return new Pool(poolConfiguration)
}
