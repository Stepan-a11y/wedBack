const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./connectDB')
const Guests = require('./schemas/guestsSchema');

const app = express()
const router = express.Router();

app.use(cors()); 
app.use(bodyParser.json());
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

router.post( '/newguest', (req, res) => {
    let newGuest = new Guests({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        status: req.body.status,
    });
    
    try {
        newGuest.save();
        res.json(newGuest);    
    } catch (err) {
        res.json({success: false, msg: "not add"});
    }
});

app.use('/api', router)

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