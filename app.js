const express = require("express");
const cheerio = require("cheerio");
const request =  require("request");
const path = require('path')



const app = express();
const url = "https://movie.douban.com/";

//请求页面的数据
function getData(){
    let data =[];
    return new Promise((resolve,reject)=>{
        request(url,(err,res,body)=>{
            $ = cheerio.load(body);
            let content = $("#screening .ui-slide-item");
            let length = content.length;
            while(length--){
                let title = $(content[length]).attr("data-title");
                title && data.push(title);
            }
            resolve(data)
        })
    })
}

app.get("/data",(req,res)=>{
    console.log("getData")
    getData().then(data=>{
        res.send(data)
    })
});


app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000,()=>console.log("run 3000"))