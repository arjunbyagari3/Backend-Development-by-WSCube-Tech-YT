

let mongoose= require('mongoose')

let userEnquirySchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true
    }
});


let enquiryModel=mongoose.model("enquiry",userEnquirySchema)


module.exports={enquiryModel}
