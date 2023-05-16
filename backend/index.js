const express= require('express');
const app = express();

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer(app);
const io = new Server(httpServer, { cors: {origin: 'http://localhost:3000'} });

io.on("connection", (socket) => {
  console.log('client connected');

  socket.on('sendmsg', (data) => {
    console.log(data);
    data.sent = false;
    socket.broadcast.emit('recmsg', data);
  })
});

//importing Router
const userRouter = require('./routers/userRouter');
const cors=require('cors');
app.use(cors({

    origin:['http://localhost:3000']
}));

//convert json data
app.use(express.json());

//adding routers
app.use('/user',userRouter);

const port = 5000;
app.get('/',(req,res)=>{
    res.send('working perfectly');

});

app.get('/add',(req,res)=>{
    res.send('Response from Add');
})
//geting you all
app.get('/getall',(req,res)=>{
    res.send('Response from gett all');
})

httpServer.listen(port,()=>{console.log('server started!!');});
 