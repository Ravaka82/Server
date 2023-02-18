const express = require('express');
const cors = require('cors');
const app = express(); // new instance express
const PORT = 4000;
app.use(cors())
app.get('/', (req, res) => {
    res.send('Hello Ravaka 🎉')
  })
app.listen(PORT, () => {
    console.log(`Ravaka start server on ${PORT} 🎉`)
  })