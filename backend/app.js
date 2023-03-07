const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { conection, getDB } = require("./database/conection"); 

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({type: "*/*"}));
app.use(cors());

 

conection((err) => {
  if (!err) {
    app.listen(3000, () => {
      console.log("server on port 3000");
    });
    db = getDB();
  }
});

app.post("/", function (req, res, next) {
  let data = req.body;
    console.log(data);
    db.collection('datos').insertOne(data).then(result=>{
        res.status(200).json(result)
    }).catch(err=>{
        res.status(500).json({err: err})
    })
});
