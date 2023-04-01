import Express from "express";
import mongoose, { model, Schema } from "mongoose";

const userSchma=new Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    }

})

export const userData=model("usrData",userSchma)
