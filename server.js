const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(cors())
app.options('*', cors())
app.use(bodyParser.urlencoded({ extended : true }))
app.use( bodyParser.json())
app.use(express.json())

const uploaderApiRoute = require('./routes/uploaderApiRoute')
const consumerApiRoute = require('./routes/consumerApiRoutes')

app.use(uploaderApiRoute)
app.use(consumerApiRoute)

app.get("/api/test", (req, res) => res.send("Udemy Clone Backend Apis"));

app.listen(5000, () => {
    console.log("Server is Up & Running");
});

