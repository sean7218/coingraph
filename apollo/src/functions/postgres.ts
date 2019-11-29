'use strict';
import { Pool } from 'pg'

export const createPool = () => {
    const poolConfiguration = {
      host          : process.env.RDS_HOST,
      database      : process.env.RDS_DATABASE,
      user          : process.env.RDS_USER,
      password      : process.env.RDS_PASSWORD,
      port          : parseInt(process.env.RDS_PORT ? process.env.RDS_PORT : "5432")
    }
    
    return new Pool(poolConfiguration)
}