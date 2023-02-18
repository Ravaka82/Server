const express = require('express');
const app = express(); // new instance express
const PORT = 4000;
app.get('/', (req, res) => {
    res.send('Hello Ravaka 🎉')
  })
app.listen(PORT, () => {
    console.log(`Ravaka start server on ${PORT} 🎉`)
  })