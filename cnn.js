const pgPromise = require('pg-promise')
const config = {
    host: 'localhost',
    port: '5432',
    database: 'supermarket',
    user: 'postgres',
    password: 'viviana24'
}
const pgp = pgPromise({})
const db = pgp(config)

exports.db = db