const express = require('express');
const { connection } = require('./config/db');
const { authentication } = require('./middlewares/authentication');
const { UserRouter } = require('./routes/Auth.routes');
const { TodoRouter } = require('./routes/Todo.routes');
const app = express();
const PORT = process.env.PORT || 8500;
app.use(express.json());
require('dotenv').config();
const cors = require('cors');
app.use(cors());
app.get("/", (req,res) => {
    res.send("Hello this is Homepage");
})
app.use("/",UserRouter);
app.use("/",TodoRouter);
app.listen(PORT,async () => {
    try{
        await Connection
        console.log('Connected To DB Successfully')
    }catch(err){
        console.log('Connection to db is not Established')
        console.log(err)
    }
    console.log("Listening to the port",PORT)
})