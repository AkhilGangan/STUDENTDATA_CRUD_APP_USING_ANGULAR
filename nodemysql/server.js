const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const server = express();
server.use(bodyParser.json());

const cors = require('cors');
server.use(cors());

//Establish the database connection

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'dbsmschool', 
});

db.connect(function (error) {
    if (error){
        console.log("Error Connecting to DB");
    } else{
        console.log("SuccessFully Connected to DB");
    }
    
})

//Establish the Port

server.listen(8085,function check(error) {
    if (error) 
    {
    console.log("Error....!!!!");
    }
    else 
    {
        console.log("Started....!!!! 8085");
    }
});

//Create the Records

server.post("/api/student",(req,res)=>{
    let details = {
        stname: req.body.stname,
        course:req.body.course,
        fee:req.body.fee,
    };
    let sql = "INSERT INTO student SET ?";
    db.query(sql,details,(error)=>{
        if(error){
            res.send({status:false,message:"Student created failed"});
        } else{
            res.send({status:true,message:"Student created successfully"});
        }
    });
});

//View the Records

server.get("/api/student",(req,res)=>{
    let sql = "SELECT * FROM student";
    db.query(sql,function(error,result){
        if(error){
            console.log("Error Connecting to DB");
        } else{
            res.send({status:true,data:result});
        }
    });
});

//Search the Records

server.get("/api/student/:id",(req,res)=>{
    let studentid=req.params.id;
    let sql = "SELECT * FROM student WHERE id=" + studentid;
    db.query(sql,function(error,result){
        if(error){
            console.log("Error Connecting to DB");
        } else{
            res.send({status:true,data:result});
        }
    });
});

//Update the Records

server.put("/api/student/:id",(req,res)=>{
    let sql = "UPDATE student SET stname='" + req.body.stname +
    "',course ='" + req.body.course +
    "',fee='" + req.body.fee + "' WHERE id =" +
    req.params.id;

    db.query(sql,(error)=>{
        if(error){
            res.send({status:false,message:"Student Updated Failed"});
        } else{
            res.send({status:true , message:"Student Updated Successfully"});
        }
    });
});

//Delete the Records

server.delete("/api/student/:id", (req, res) => {
    let sql = "DELETE FROM student WHERE id=" + req.params.id + "";
    let query = db.query(sql, (error) => {
      if (error) {
        res.send({ status: false, message: "Student Deleted Failed" });
      } else {
        res.send({ status: true, message: "Student Deleted successfully" });
      }
    });
  });

  //Delete All Records

  server.delete("/api/student", (req, res) => {
    let sql = " DELETE FROM student"
    db.query(sql, (error) => {
        if (error) {
          res.send({ status: false, message: "Student Deleted Failed" });
        } else {
          res.send({ status: true, message: "All Students  Deleted successfully" });
        }
      });
    });
