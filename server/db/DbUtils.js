const mysql = require('mysql')
const GenId = require('../utils/SownFlake')

const genId = new GenId({WorkerId:1})
var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '123456',
    database: 'blog_sqlit'

})

db.async = {} //创建一个空对象
db.async.all = (sql,params)=>{
    return new Promise((resolve,reject)=>{
        db.query(sql,params,(err,rows) => {
            resolve({err,rows})
        })
    })
}

db.async.run = (sql, params) => {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err, rows) => {
            resolve({ err, rows })
        })
    })
}

db.connect( (err) => {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功') 
    }
})

module.exports = {db,genId}