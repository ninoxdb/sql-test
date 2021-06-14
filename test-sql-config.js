const mssql = require('mssql');
const config = {
    "name": "ninox_mssqltest",  // used to identify the SQL connection from within Ninox
    "type": "mssql",
    "active": true,
    "server": "localhost",      // needs to be changed
    "domain": "WINDOWSDOMAIN",  // needs to be changed or removed
    "user": "MSSQLUsername",    // needs to be changed
    "password": "topsecret",    // needs to be changed
    "database": "db_name",      // needs to be changed
    "options": {
        "encrypt": false,
        "trustServerCertificate": true
    }
}

const tableName = 'dbo.TableName'; // needs to be changed

const pool = new mssql.ConnectionPool(config);
runQuery(tableName);

async function runQuery(tableName) {
    try {
        const connection = await pool.connect();
        const request = await pool.request();
        const command = 'select * from ' + tableName;
        const result = await request.query(command);
        console.log('query resulting in', result);
    } catch (error) {
        console.error(error);
    }
}
