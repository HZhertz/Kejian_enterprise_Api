import mysql from 'mysql2'
import config from './config.js'

//创建连接池
const pool = mysql.createPool(config)
const query = (sql, val) => {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, val, (err, fields) => {
          if (err) {
            reject(err)
          } else {
            resolve(fields)
          }
          connection.release()
        })
      }
    })
  })
}

export default query
