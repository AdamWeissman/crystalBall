const express = require("express");
const app = express();
const path = require("path")

// app.use((request, response) => {
//   console.log("we got a new request")
//   // response.send(`<iframe width="560" height="315" src="https://www.youtube.com/embed/raleKODYeg0?controls=0&amp;start=${Math.floor(Math.random() * 120)}" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
//   response.send("testing")
// })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/index.html'))
  res.render('home.ejs')
  
})

app.get('/theFuture', (req, res) => {
  const start = 10 + Math.floor(Math.random() * 100);
  const finish = start + 11 + Math.floor(Math.random() * 13);
  const animationLength = (finish - start).toString();
  
  const hash = { equilibrium: 'raleKODYeg0', independenceDay: 'B1E7h3SeMDk', iAmLegend: 'dtKMEAXyPkg', soylentGreen: 'N_jGOKYHxaQ', metropolis: 'GrFBId1b8U0', worldWarZ: 'Md6Dvxdr0AQ', hungerGames1: 'mfmrPu43DF8', roboCop: 'NFWgbGVgozA', bladeRunner: 'eogpIG53Cis', bladeRunner2049: 'gCcx85zbxz4'}
  const changeMeUp = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }(Object.values(hash))
  
  res.render('theFuture.ejs', { begin: start, end: finish, theLink: changeMeUp, animationLength: animationLength})
  
})




app.listen(3000, () => {
  console.log("listening on port 3000")
})

