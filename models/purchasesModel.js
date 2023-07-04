const mongoose  = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    purchaseId:{
        type: Number,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phoneNumber:{
        type: Number,
        required:true
    },
    buyerName:{
        type:String,
        required:true
    },
    timeStamp:{
        type:String
    },
    token:{
        type:String
    },
    productId:{
        type:String,
        required:true
    }
})

const purchaseModel = mongoose.model('purchases',purchaseSchema)
module.exports = purchaseModel