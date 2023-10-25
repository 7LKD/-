const express = require('express');
const router = express.Router();
const {genId,db} = require("../db/DbUtils")

//列表接口
router.get("/list",async(req,res)=>{

    const search_sql = "SELECT * FROM `category`"
    let { err,rows } = await db.async.all(search_sql,[])
    if(err === null){
        res.send({
            code:200,
            msg:'查询成功',
            rows
        })
    }else{
        res.send({
            code:500,
            msg:'查询失败'
        })
    }
})


//添加接口
router.post("/_token/add",async(req,res)=>{
    // console.log(JSON.parse(req.body))
    let {name} = req.body
    console.log(req.body)
    const insert_sql = "INSERT INTO `category` (`id`,`name`) VALUES (?,?)"
    let {err,rows} = await db.async.all(insert_sql,[genId.NextId(),name])
    if(err === null){
        res.send({
            code:200,
            msg:"添加成功"
        })
    }else{
        res.send({
            err,
            code:500,
            msg:"添加失败"
        })
    }
})



//修改接口
router.put("/_token/update",async(req,res)=>{

   //token 登录验证
    // let token = req.headers.token;
    // let admin_token_sql = "select * from `admin` where `admin `token` = ? "
    // let adminResult = await db.async.all(admin_token_sql,[token])
    // if(adminResult.err != null || adminResult.rows.length == 0){
    //     res.send({
    //         code:403,
    //         msg:"请先登录"
    //     })
    //     return
    // }
/////////////////////

    let {id,name} = req.body;
    const update_sql = "update `category` SET `name` = ? WHERE `id` = ?";
    let {err,rows} = db.async.all(update_sql,[name,id])

    if(err == null){
        res.send({
            code:200,
            msg:"修改成功"
        })
    }else{
        res.send({
            code:500,
            msg:'修改失败'
        })
    }
})


//删除接口

router.delete("/_token/delete",async(req,res)=>{
    let id = req.query.id;
    const delete_sql = "DELETE FROM `category` WHERE `id` = ?";
    let {err,rows} = await db.async.all(delete_sql,[id])

    if(err == null){
        res.send({
            code:200,
            msg:"删除成功"
        })
    }else{
        res.send({
            code:500,
            msg:'删除失败'
        })
    }
})


module.exports =router