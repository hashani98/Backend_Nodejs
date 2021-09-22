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
mongoose.connect("mongodb+srv://sep_mongo_db:SEPmongo2021@cluster0.620gj.mongodb.net/trip",{ useNewUrlParser: true, useUnifiedTopology: true })
  


const port  = process.env.PORT || 3000;

app.listen(port, () => {
        console.log("Server is running on", process.env.APP_PORT);
      });
      
  



  
