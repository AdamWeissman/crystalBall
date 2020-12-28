const express = require("express");
const app = express();
const path = require("path")

// app.use((request, response) => {
//   console.log("we got a new request")
//   // response.send(`<iframe width="560" height="315" src="https://www.youtube.com/embed/raleKODYeg0?controls=0&amp;start=${Math.floor(Math.random() * 120)}" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
//   response.send("testing")
// })

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/index.html'))
  res.render('home.ejs')
  
})




app.listen(3000, () => {
  console.log("listening on port 3000")
})

