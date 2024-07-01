const mongoose =require("mongoose");
const cors =require("cors");
const express=require("express");

let app=express();
app.use(cors());

let employeeSchema=new mongoose.Schema({
        id: Number,
        firstName: String,
        lastName: String,
        email: String,
        gender: String,
        age: Number,
        country: String,
        department: String,
        profilePic: String,
});

let Employee=new mongoose.model("employees",employeeSchema);

app.get("/employees",async(req,res)=>{
    
    let employeesArr= await Employee.find()
    // let employeesArr= await Employee.find().limit(150);

    // let employeesArr= await Employee.find().skip(100).limit(100);

    // let employeesArr=await Employee.find().and(
    //     [{ country: "Japan" },
    //      { gender: "Male"},
    //      {age:{$gte:20,$lte:70}},
    //     ]);

    // let employeesArr=await Employee.find().or(
    //         [{ country: "Japan" },
    //          { gender: "Male"},
    //          {age:{$gte:20,$lte:70}},
    //         ]);

    // let employeesArr=await Employee.find().sort("age country department")

    // let employeesArr=await Employee.find().select("-email -_id");

    // let employeesArr=await Employee.find().distinct("country");

    res.json(employeesArr);
});

app.listen(1405,()=>{
    console.log(`Listening to port 1405`);
});

connectToMDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://akhilchinnamsetti:akhilch1405@batch2403.derqdcc.mongodb.net/tatagroup?retryWrites=true&w=majority&appName=batch2403");
        console.log("Successfully connected to MDB");
    }catch(err){
        console.log("Unable to connect to MDB");
    }
}
connectToMDB();
    

