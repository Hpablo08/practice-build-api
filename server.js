// require("dotenv").config()
const express = require('express')
const app = express()
const cors = require('cors')
const knex = require('./knex')

const PORT = process.env.PORT || 8080 

//middleware
app.use(cors())
app.use(express.json());


//routes

app.get("/poursNpups", async (req, res) => {
 const breweries = await knex.select().from('breweries')
 res.status(200).json(breweries)
});





app.listen(PORT, () => {
  console.log('server has started on port 8080')
})



