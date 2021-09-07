require("dotenv").config();
const express = require("express");
//const pool = require("./config/database");
var cors = require("cors");
const bodyParser = require('body-parser')


const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
  
  app.use("/", require("./routes"));

  const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/trip",{ useNewUrlParser: true, useUnifiedTopology: true })
  




app.listen(process.env.APP_PORT, () => {
        console.log("Server is running on", process.env.APP_PORT);
      });
      
  



  