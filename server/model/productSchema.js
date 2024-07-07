const mongoose=require("mongoose");

const productSchema=mongoose.Schema({
    imageURL:{type:Number,required:true},
    price:{type:String,required:true},
    productName:{type:String,required:true}
})
module.exports=mongoose.model('product',productSchema);