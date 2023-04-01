import { urlencoded } from "body-parser";
import express  from "express";
import mongoose from "mongoose"
import { router } from "./routers/userRoter";
import dotenv from "dotenv"

dotenv.config()


const app = express()

//midlwares----------------------------
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)



//Connect dataBase---------------------

mongoose.connect(process.env.APP_URL as string);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected to the mongoose");
});  


//serverCreation---------------------------
const port = process.env.PORT
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
