const Pool = require('pg').Pool
const pool = new Pool({
  user: 'rcroa',
  host: '192.168.1.64',
  database: 'rcroa',
  password: 'testPassword1',
  port: 5432,
});

const getCoffees = () => {
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM public."coffeeOrders"', (error, results) => {
        if (error) {
          reject(error)
        }
        resolve(results.rows);
        console.log(results.rows[0])
      })
    }) 
  }
  
  module.exports = {
    getCoffees
  }