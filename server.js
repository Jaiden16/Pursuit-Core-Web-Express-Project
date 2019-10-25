const express = require('express') // import express
const cors = require("cors")//import cors
const app = express() // create an express server
const port = 8000; // we will use this later
const School = require("./School.js")
app.use(cors());

let mySchool = new School()

app.get('/', (req, res) => {
  res.send('Express Project Lab')
}) 


app.use("*", (req,res) =>{
  res.status(404)
  res.send("This was not found =( 404")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) // asks our server to listen for requests on port 8000, logging to the console to confirm that things are working