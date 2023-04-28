const express= require('express');
const res = require('express/lib/response');
const app = express();

//imposrting Router
const userRouter = require('./routers/userRouter');
const cors=require('cors');
app.use(cors({

    origin:['https://localhost:3000']
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

app.listen(port,()=>{console.log('server started!!');});
 