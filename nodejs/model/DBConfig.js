const mysql2= require('mysql2')

function poolConnection() {
    let conn=  mysql2.createPool({
        host:'localhost',
        port:'3306',
        user:'root',
        password:"",
        database:'databasedqv',
    
    })
    const promiseConn= conn.promise()
    return promiseConn
}

module.exports = poolConnection()