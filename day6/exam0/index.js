//const express = require('express')
import express from "express"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

console.log(process.env.NODE_ENV); //cross-env
console.log(process.env.MONGODB_URL); //dotenv
console.log(process.env.MONGODB_POST);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  if(process.env.NODE_ENV == "dev")
    console.log(`Example app listening at http://localhost:${port}`)
})