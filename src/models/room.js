"use strict"

/* -------------------------------------------------------
    ROOM MODEL
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const RoomSchema=new mongoose.Schema({
    roomnumber:{
        type:Number,
        unique:true,
        required:true,        
    },
    
    bedtype:{
        type:String,
        trim:true,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
   
    // images:[],
    images:{
        type:Array,
        default:[]
    }


},{
    collection:"rooms",
    timestamps:true
})

module.exports=mongoose.model("Room",RoomSchema)