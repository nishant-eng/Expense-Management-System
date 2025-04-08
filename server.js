const express = require('express') //used to import modules
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')
// config dot env
dotenv.config();

//rest object
const app =express()

//middlewares
app.use(morgan('dev'))
app.use(express.json()) //concise colored o/p Logging formats
app.use(cors()) //to allow request from cross origin

//routes
app.get('/',(req,res)=>{
    res.send('<h1>Hello from Server</h1>')
})

//assign port
const PORT = 3000 || process.env.PORT

//Listen server
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
}); //call back function