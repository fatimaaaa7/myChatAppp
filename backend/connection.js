const mongoose= require('mongoose');
const url='mongodb+srv://rahemeen:9696990601@cluster0.ujpzu3v.mongodb.net/mydatabase?retryWrites=true&w=majority'

//synchronous and asynchronous
mongoose.connect(url)
.then((result) => {
    // console.log(result);
    console.log('database connected');
})
.catch((err) => {
    console.error(err);
});


module.exports = mongoose;