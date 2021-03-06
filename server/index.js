import express from 'express'
import bodyParser from 'body-parser'
import cors from "cors"
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.PORT || 5000; 
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())


const CONNECTION_URL ='';


mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(()=>app.listen(PORT,() => console.log(`Server running at PORT ${PORT}`)))
.catch((error)=>console.log(error.message))

mongoose.set('useFindAndModify',false);