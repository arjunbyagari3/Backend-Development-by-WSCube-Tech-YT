const { MongoClient } = require("mongodb");



const mongoConnectionUrl = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(mongoConnectionUrl);


let dbConnection = async ()=> {
    await client.connect();
    let db = client.db("mongoDBProject_database")
    return db;
    
}


module.exports={dbConnection}