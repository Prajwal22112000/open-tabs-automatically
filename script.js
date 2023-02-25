const express = require("express");
const randomwords = require("random-words");
const open = require("open");
const app = express();

function sleep(num){
    return new Promise((r)=>{setTimeout(r,num)});
}

async function callsleep() {
    const arr = randomwords(30);
    for(let i = 0; i < arr.length; i++){
        open("https://www.bing.com/search?q="+ arr[i] +"&cvid=591bc716079e4ae08931a2e92d172fcb&aqs=edge.0.69i59l3j69i60l3.1075j0j1&pglt=171&FORM=ANNTA1&PC=U531");
        await sleep(6000);
    }
}

app.listen(5000 || process.env.PORT, (err)=>{
    if(err){
        console.log(err);
    }
    console.log("server started at port 5000");
    callsleep();
})







