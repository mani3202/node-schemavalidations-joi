const express = require('express'),
app = express(),
PORT = process.env.PORT || 3000,
joi = require('@hapi/joi'),
expressJoi = require('express-joi-validator');
const schema = {
    body: {
        name : joi.string().required(),
        email : joi.string().email().required()
    }
}
app.use(express.json());
app.use(express.urlencoded())

app.post('/',expressJoi(schema),(req,res) =>{

 res.send('hello world')

})
app.use(function (err, req, res, next) {
    if (err.isBoom) {
         return res.status(err.output.statusCode).json(err.output.payload);
    }
});
app.listen(PORT,() => {
    console.log(`server is listning at ${PORT}`);
})