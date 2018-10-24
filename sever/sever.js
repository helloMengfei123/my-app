const express = require('express')
const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017'
//链接数据库
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
  console.log('mongo connect success')
})

const user = mongoose.model('user',new mongoose.Schema({
  name:{type:String,require:true},
  age:{type:Number,require:true},
}))
//新增数据
// user.create({
//   name:'mengfei',
//   age:12,
// },function(err,doc){
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// })
//创建app
const app = express()

app.listen(9093,function(){
  console.log('杨梦飞')
})

app.get('/',function(req,res){
  res.send('<h1>来吧</h1>')
})

app.get('/data',function(req,res){
  //查找
  user.findOne({'age':26},function(err,doc){
    res.json(doc)
  })
  // res.json({"name":"梦飞","age":"19"})
})

user.update({'name':'mengfei'},{'$set':{'age':26}},function(err,doc){
  console.log(doc)
})