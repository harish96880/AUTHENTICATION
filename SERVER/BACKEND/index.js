const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
mongoose.connect('mongodb://localhost:27017/newDB')

const port = 8080

app.get('/', (req, res) => {
    res.send("Hello There")
})

app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try{
        await User.create({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            password : req.body.password
        })
        res.json({status: 'ok'})
    }
    catch(err) {
        res.json({status: "error", error: "Duplicate Email"})
    }
})

app.post('/api/login', async (req, res) => {
        const user = await User.findOne({
            email : req.body.email,
            password : req.body.password
        })
        if(user) {
            const token = jwt.sign({
                firstName: user.firstName,
                email: req.body.email
            }, 'secret123')
            return res.json({status: "ok", user: token})
        }
        else {
        res.json({status: "error", error: "Duplicate Email"})
        }
})

app.listen(port, () => console.log(`Server is listening on ${port}`))