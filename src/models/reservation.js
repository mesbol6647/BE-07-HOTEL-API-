"use strict"
/* -------------------------------------------------------
   Reservation Model
------------------------------------------------------- */
const { mongoose } = require('../configs/dbConnection')
/* ------------------------------------------------------- */

const ReservationSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true

    },
    
    roomId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room",
        required:true
    },

    arrivalDate:{
        type:Date,
        required:true,
    },
    departureDate:{
        type:Date,
        required:true,
    },
    guest_number:{
        type:Number,
        required:true,

    },
    night:{
        type:Number,
        require:true,

    },
    price:{
        type:Number,
        required:true,

    },
    totalprice:{
        type:Number,
        default:function(){return this.night*this.price*this.guest_number},
        transform:function(){return this.night*this.price*this.guest_number},
        
    }
},{
    collection:"reservations",
    timestamps:true,
})
module.exports=mongoose.model("Reservation",ReservationSchema)