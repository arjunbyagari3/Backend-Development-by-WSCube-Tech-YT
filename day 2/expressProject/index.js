
let expressVar =require("express")
require('dotenv').config()

const { checkToken } = require("./checkTokenMiddleware")

let app=expressVar()
app.use(expressVar.json())              //inbuilt middleware
// let myToken="12345"
// let myPass="54321"

// let checkToken=(req,res,next)=>{
//     // console.log("say my name!...");
//     // console.log(req.query.token);
    
//     if(req.query.token=="" || req.query.token==undefined ){
        
//         return res.send(
//             {
//                 status:0,
//                 msg:" please fill the token"
//             }
//         )
//     }
//     if(req.query.token !=myToken){
//         return res.send(
//             {
//                 status:64,
//                 msg:" please enter the correct token"
//             }
//         )
//     }

//     next()

    
// }

// app.use(checkToken)             //middleware


app.use((req,res,next)=>{
    if (req.query.pass=="" || req.query.pass==undefined) {
        return res.send(
            {
                status:0,
                msg:"please enter the pass"
            }
        )
        
    }
    if (req.query.pass!= process.env.myPass) {

        
        return res.send(
            {
                status:45,
                msg:"please enter the correct pass"
            }
        )
        
    }
    next()
})


app.get("/",(req,res)=>{
    
    res.send({status:1,msg:"Home page API"})
})

app.get("/news",checkToken,(req,res)=>{
    res.send({status:2,msg:"News page API"})
})

app.get("/products/:id",(req,res)=>{
    let currentId=req.params.id
    res.send("products page ="+currentId)
})

app.post("/login",(req,res)=>{
    // console.log(req.body);     //object
    // console.log(req.query);
    
    
    // res.send(
    //     {
    //         status:3,
    //         msg:"Log in page",
    //         bodyData:req.body,
    //         queryData:req.query
    //     }
    // )

    res.status(200).json(
        {
            status:3,
            msg:"Log in page",
            bodyData:req.body,
            queryData:req.query
        }
    )
})

// app.listen(5000)

app.listen(process.env.PORT || 5000)











