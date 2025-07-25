



//! What is backend ?

// the backend (server side ) is the part that we can't see. It is the internet working behind the scenes of the application or website. This includes stuff like server , database , etc



//! Intro to Node.js 

// Node js is a open source and cross platform javascript runtime environment 


// node js runs the V8 javascript engine , the core of Google Chrome , outside of the browser . 

// node js comes with 
// 1) npm 
// 2) npx


// to create package.json file 

// npm init -y 

//! Nodemon package 

// npm i -g nodemon         //installation 
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser      //permission 

// run file     ---> nodemon file_name 

// "start": nodemon index   ---> npm start



//! types of modules 

// core modules 
// built-in modules provided by Node.js such as fs ,http ,path,etc 

// local modules 
// custom modules created by developers and located within the project 

// third-party modules 
// modules installed via npm

// difference b/w react and node :

// react ---> import and export method          "type": module

// node ---> require and module.exports             "type":commonjs






// const addToCart = require("./cartModule");           default export 
const {addToCart, changeQty, name} = require("./cartModule");        // named export

console.log("welcome to backend Arjun");
// console.log(10+20);

// let l =[10,30,50,674,35,32]

// l.forEach((value,index)=>{
//     console.log(value,index);
    
// })





console.log(addToCart());

// console.log(changeQty());            //error         default export

console.log(changeQty());

console.log(name);






