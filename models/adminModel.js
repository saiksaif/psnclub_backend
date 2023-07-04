const mongoose  = require("mongoose");

const adminSchema = new mongoose.Schema({
    id:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    recoveryEmail:{
        type:String
    },
    phoneNumber:{
        type:Number
    },
    tokenOfAdmin:{
        type:String
    },
    w_Group:{
        type:String
    }
})

const adminModel = mongoose.model('user',adminSchema)
module.exports = adminModel