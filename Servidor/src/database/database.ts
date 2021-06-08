import mysql from 'promise-mysql';
import config from './config';
const pool = mysql.createPool(config.database);

pool.getConnection()
    .then(connection =>{
        pool.releaseConnection(connection);
        console.log('Conectado a la base de datos');
    });
export default pool;