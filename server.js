const express = require('express')
const app = express();
const PORT=3008
const conn = require('./connection/connectdb');
const register = require('./Routes/register')
const login = require('./Routes/login')
const dashboard = require('./Routes/dashboard')
app.use(express.static(__dirname + '/public'))
app.set('view engine','ejs')
// const conn = require('../connection/connectdb');


// my all end points

app.use('/user',register)
app.use('/user-login',login)
app.use('/dashboard',dashboard)
app.get("/profile",(req,res)=>{
    res.render("profile")
})
app.listen(PORT,()=>{ console.log(`I am listining on ${PORT}`);
})