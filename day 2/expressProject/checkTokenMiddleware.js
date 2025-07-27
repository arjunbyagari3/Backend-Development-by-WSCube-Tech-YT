let myToken="12345"

let checkToken=(req,res,next)=>{
    // console.log("say my name!...");
    // console.log(req.query.token);
    
    if(req.query.token=="" || req.query.token==undefined ){
        
        return res.send(
            {
                status:0,
                msg:" please fill the token"
            }
        )
    }
    if(req.query.token !=myToken){
        return res.send(
            {
                status:64,
                msg:" please enter the correct token"
            }
        )
    }

    next()

    
}

// app.use(checkToken)             //middleware


module.exports={checkToken}