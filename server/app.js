/**
 * "multer" 上传功能中间件
 * "sqlite3" 数据库
 * "uuid" 很难重复的id
 */

const express = require('express');
const multer = require('multer');
const path = require('path');
const { db, genId } = require("./db/DbUtils");
const app = express();
const port = 9000;

//开放端口使用
app.all('*', function (req, res, next) {
    
    //设置跨域允许访问的类型
    res.header('Access-Control-Allow-Origin', '*');
    //设置前端带过来的访问请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type,token');
    //设置请求方法
    res.header('Access-Control-Allow-Methods', '*');
    //设置参数传递的类型？是form-data形式还是json格式？
    // res.header('Content-Type', 'application/json;charset=utf-8');
    // 因为我还要上传图片，所以不能只用json格式,所以干脆不限制，让浏览器自动判断就行了。
    // res.header('Content-Type', 'multipart/form-data');
    next();
});

app.use(express.json()); 
const updated=multer({
    dest:"./public/upload/temp"
})

app.use(updated.any());
app.use(express.static(path.join(__dirname, "public")))


const ADMIN_TOKEN_PATH = "/_token"
app.all("*", async (req, res,next) => {
    console.log('查找接口是否是权限接口中。。')
    if(req.path.indexOf(ADMIN_TOKEN_PATH) >-1){

         //权限验证测试，是否有token
         console.log('发现有token，进行校验。')
         let { token } = req.headers
         console.log(token)

        // let token = req.headers.token;
        let admin_token_sql = "SELECT * FROM `admin` WHERE `token` = ?"
        let adminResult = await db.async.all(admin_token_sql,[token])
        if(adminResult.err != null || adminResult.rows.length == 0){
            res.send({
                code:403,
                msg:"请先登录"
            })
            return
        }else{
            next();
        }

    }else{
        next();
    }
})

app.use("/test",require("./routers/TestRouter"))
app.use("/admin",require("./routers/AdminRouter"))
app.use("/category",require("./routers/CategoryRouter"))
app.use("/blog",require("./routers/BlogRouter"))
app.use("/upload",require("./routers/UploadRouter"))

app.get('/', (req, res) => {
    res.send("hello world!");
})

app.listen(port,() => {
    console.log(`允许启动: http://localhost:${port}/`);
})