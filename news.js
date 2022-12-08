const express = require("express")
const path =require('path')
const port =process.env.PORT || 3000

let master_path=path.join(__dirname)
console.log ("path  is"+master_path);

const app = express()
//hear we use a library node fetch for fatching the data form an api

const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))


app.get('/', async (req, resp) => {

    let data = await fetch(" https://newsapi.org/v2/top-headlines?country=in&apiKey=e0afc93feba64fbaa041d5d53f687985")
    data = await data.json()
    // resp.sendFile(`${master_path}/home.html`)
    resp.send(data)
    console.log(data)


})

app.listen(port)