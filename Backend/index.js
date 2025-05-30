import express, { urlencoded } from "express";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import bodyparser from  "body-parser"


import cors from "cors"
import router from "./routes/intruder.js";
import connectDB from "./config/db.js";

const app = express()

connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use("/api/v1",router )

app.listen(process.env.PORT ,()=>{
    console.log(`server started at ${process.env.PORT}`)
})