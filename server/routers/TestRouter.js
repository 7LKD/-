const express = require('express');
const router = express.Router();
const {genId,db} = require("../db/DbUtils")


router.get('/test', async(req, res) => {
    // db.all("select * from `admin`",[],(err,rows)=>{
    //     console.log(rows);
    // })
    // res.send({
    //     id :genId.NextId(),
    // })
    const target = "ADMIN"
    const sql = "SELECT * FROM " + target
    const reuslt = await db.async.all(sql,[])
    res.send(reuslt)
});

module.exports =router