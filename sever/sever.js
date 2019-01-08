const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
const Chat = model.getModel('chat')
const app = express()

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', function(socket){
  socket.on('sendmsg',function(data){
  console.log(data)
const {from,to,msg} = data
const chatid = [from,to].sort().join('_')
Chat.create({chatid,from,to,content:msg},function(err,doc){
  io.emit('recvmsg',Object.assign({},doc._doc))
})
    // io.emit('recvmsg',data)
  })
});
const userRouter = require('./user')


app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
// app.listen(9093,function(){
//   console.log('node app start at port 9093')
// })
//哈哈哈
app.set('port', process.env.PORT || 9093);
const server = http.listen(app.get('port'), function() {
  console.log('start at port:' + server.address().port);
}) ;