const express=require("express");
const bodyparser=require("body-parser")
const CityRepository=require("./repository/city-repository")
const {PORT}=require('./config/serverConfig.js')
const ApiRoutes=require("./routes/index")
const setupandStartServer=async ()=>{

    const app=express();
    app.use(bodyparser.json())
    app.use(bodyparser.urlencoded({extended:true}))

    app.use('/api',ApiRoutes)

    app.listen(PORT,()=>{
        console.log(ApiRoutes);
        console.log(`server is running at port ${PORT}`)
        //const repo=new CityRepository();
        //repo.createCity({name:"Chennai"});
    })
}

setupandStartServer();

