const express = require('express');
const mongoose = require('mongoose')

const connectDB = require('./connectDB')

const app = express()

const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})


mongoose.connect(connectDB.wedding, { useNewUrlParser: true, useUnifiedTopology: true })


mongoose.connection.on("connected", () => {
    console.log("success");
})

mongoose.connection.on("error", (err) => {
    console.log("not seccess" + err)
})

app.listen(port, () => {
    console.log(`server running on port ${port}`)
})