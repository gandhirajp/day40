const fs=require("fs");
const express = require("express");
const app = express();
const cors= require("cors");



//permision public
let options={
    origin:"*"
}
app.use(cors(options))

//get 
app.get("/datetime", function (req, res) {
    //date and time
    let date=new Date();
    let file=((date.getDate())+"-"+(date.getMonth()+1)+"-"+(date.getFullYear())+"-"+(date.getHours())+"-"+(date.getMinutes())+"-"+(date.getSeconds()));
    let final=(file+".txt")

    //timestamp
    let timestamp=date.getTime().toString();
    res.json(
        fs.writeFile(`file/${final}`,timestamp,function(err){
            if(err) throw err;
            console.log("file  created");
        })
    )
})


app.listen(3001)
