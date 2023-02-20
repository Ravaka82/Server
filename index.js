const PORT = 4000;
const express = require('express');
const cors = require('cors');
const app = express(); // new instance express
const MongoDBClient = require('./mongoClient')
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Ravaka 🎉')
  })
app.listen(PORT, () => {
    console.log(`Ravaka start server on ${PORT} 🎉`)
    MongoDBClient.initialize()
  })