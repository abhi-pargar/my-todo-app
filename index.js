const express=require('express');
const server=require("./db.js");

const { todo } = require('./routes/todo.route.js');
const { home } = require('./routes/home.route.js');
const { auth } = require('./middleware/auth.middleware.js');
require("dotenv").config();
const cors = require('cors')


const app=express();
app.use(cors())
app.use(express.json());
app.use(auth);



app.use("/",home);
app.use("/todo",todo);


app.get("/",(req,res)=>{
    res.status(200).send({mesg:"Home Page"});
});

app.listen(process.env.PORT_NUMBER,server)
