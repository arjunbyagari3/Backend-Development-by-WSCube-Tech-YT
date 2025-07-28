
let expressVar=require("express");
const { dbConnection } = require("./dbConnection");
const { ObjectId } = require("mongodb");

let app=expressVar();


app.use(expressVar.json())


app.get("/student-read",async (req,res)=>{
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students")
    let data=await studentCollection.find().toArray();

    let resObj={
        status:1,
        msg:"student list",
        data
    }
    res.send(resObj)
})

app.post("/student-insert",async (req,res)=>{
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students")

    // let obj={
    //     sName:req.body.sName,
    //     sEmail:req.body.sEmail
    // }

    let {sName,sEmail}=req.body
    let obj={sName,sEmail}

    // console.log(obj);

    let checkEmail= await studentCollection.findOne({sEmail:sEmail})

    if(checkEmail){
        return res.send({
            status:0,
            msg:'Email already exists'
        })
    }


    let insertRes=await studentCollection.insertOne(obj)

    let resObj={
        status:1,
        msg:"data Inserted",
        insertRes
    }
    
    res.send(resObj)
})


app.delete("/student-delete/:id",async(req,res)=>{
    // let params =req.params;
    // console.log(params);

    let {id}=req.params;
    let myDB = await dbConnection();
    let studentCollection =myDB.collection("students")
    let delRes = await studentCollection.deleteOne({_id: new ObjectId(id)})

    let resObj={
        status:1,
        msg:"data deleted",
        delRes
    }

    res.send(resObj)
})



app.put("/student-update/:id",async(req,res)=>{

    let {id}=req.params

    let {sName,sEmail}= req.body

    // let obj={sName,sEmail}
    let obj={}

    if (sName!=="" && sName!==undefined && sName!== null){
        obj['sName']=sName
    }
    if(sEmail!=="" && sEmail!==undefined && sEmail!==null){
        obj['sEmail']=sEmail
    }

    console.log(obj);
    


    let myDB = await dbConnection();

    let studentCollection= myDB.collection("students")

    let updateRes= await studentCollection.updateOne({_id:new ObjectId(id)},{$set:obj})

    let resObj={
        status:1,
        msg:"data updated",
        updateRes
    }



    res.send(resObj)
})


app.listen("9000")