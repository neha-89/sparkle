let express = require('express');
const app = require('express')();
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;

const dotenv = require("dotenv");//to read the local environment variable
dotenv.config();
let port = process.env.PORT || 8230;
const mongoUrl = process.env.mongoUrl;

app.get('/', (req,res) => {
    res.send("Welcome to Express");
})

app.get('/services', (req,res) => {
    db.collection('services').find().toArray((err,result) =>{
    if(err) throw err;
    res.send(result); 
    })

})


MongoClient.connect(mongoUrl, (err,client) => {
    if(err) console.log(`Error while connecting`);
    const db = client.db('sparkle');
    db.collection("your_collection").find({}).toArray()
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`)
    })
})

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`)
// })

