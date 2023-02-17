const express=require("express");


const {PORT}=require('./config/serverConfig.js')

const setupandStartServer=async ()=>{

    const app=express();
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT}`)
    })
}

setupandStartServer();

