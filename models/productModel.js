const mongoose = require('mongoose');
 
const gamesList =new mongoose.Schema({
    gameName:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageLink:{
        type:String,
        required:true
    },
    ps4Game:{
        type:Boolean,
        required:true
    },
    ps5Game:{
        type:Boolean,
        required:true
    },

})

const productSchema = new mongoose.Schema({
    productId:{
        type: Number,
        required:true
    },
    accountPriceVisibility: {
        type: Boolean,
        required: true
    },
    accountPrice:{
        type: Number,
        required:true
    },
    primaryAccount: {
        type: Boolean,
        required: true
    },
    secondaryAccount:{
        type:Boolean,
        required:true
    },
    isPsPlus:{
        type:Boolean,
        required:true
    },
    psPlusExpiry: {
        type: String,
        required: true
    },
    isBooked: {
        type: Boolean,
        required: true
    },
    gameList:[{
        type:gamesList,
    }]

}); 


module.exports = mongoose.model('Product', productSchema);