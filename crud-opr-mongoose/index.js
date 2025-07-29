
let express = require("express")
let mongoose = require('mongoose');
const { enquiryModel } = require("./models/enquiry.model");
require('dotenv').config();



let app = express();

app.use(express.json());

app.post('/api/enquiry-insert',(req,res)=>{

    let {sName,sEmail,sPhone,sMessage}=req.body;

    let enquiry=new enquiryModel({
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    });

    enquiry.save().then(()=>{
        res.send({
            status:1,
            message:"Enquiry saved successfully"
        })
    }).catch((err)=>{
        res.send({
            status:0,
            message:"Error while saving enquiry",
            error:err
        })
        
    })

    // console.log(sName,sEmail,sPhone,sMessage);
    
    // res.send("data saved")
})

app.get("/api/enquiry-list", async (req,res)=>{
    // res.send("read API ")

    let enquiryList = await enquiryModel.find();
    res.status(200).json({
        status:1,
        message:"Enquiry list ",
        data:enquiryList
    })
})


app.delete("/api/enquiry-delete/:id", async(req,res)=>{
    let enquiryId=req.params.id;
    let deleteEnquiry=await enquiryModel.deleteOne({_id:enquiryId})
    res.send({
        status:1,
        message:"Enquiry deleted successfully",
        deleteEnquiry
    })
    
})

app.put("/api/enquiry-update/:id",async(req,res)=>{
    let enquiryId=req.params.id;
    let {sName,sEmail,sPhone,sMessage}=req.body
    let updateObj={
        name:sName,
        email:sEmail,
        phone:sPhone,
        message:sMessage
    }
    let updateRes=await enquiryModel.updateOne({_id:enquiryId},updateObj)

    res.send({
        status:1,
        message:"updated",
        updateRes
    })


})

mongoose.connect(process.env.DBURL).then(()=>{
    console.log("connected to MongoDB");
    app.listen(process.env.PORT,()=>{
        console.log("Server is running on port "+process.env.PORT);
        
    });
    
})