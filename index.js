const express = require("express");
const app = express();
const path = require("path")

// app.use((request, response) => {
//   console.log("we got a new request")
//   // response.send(`<iframe width="560" height="315" src="https://www.youtube.com/embed/raleKODYeg0?controls=0&amp;start=${Math.floor(Math.random() * 120)}" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
//   response.send("testing")
// })

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname + '/index.html'))
  res.render('home.ejs')
  
})

app.get('/theFuture', (req, res) => {
  const start = 12 + Math.floor(Math.random() * 530);
  const finish = start + 13 + Math.floor(Math.random() * 21);
  const animationLength = (finish - start).toString();
  
  const oldHash = { equilibrium: 'raleKODYeg0', independenceDay: 'B1E7h3SeMDk', iAmLegend: 'dtKMEAXyPkg', worldWarZ: 'Md6Dvxdr0AQ'}
  const hash = { dystopianMontage1245: 'A1ZHl8qqg4A', top10worldEnd1300: '38D90SWwLcU', top10underrated1300: 'Ut0SXRC0Kcw', top10sciFi1317: 'vpO8sZDxOGI' }
  
  //this is for a single lnk
  const changeMeUp = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }(Object.values(hash))

  // let changeMeUp2 = null

  // const loadUpWithDelay = (movieId, delay) => {
  //   return new Promise ((resolve) => {
  //     setTimeout(() => {
  //       changeMeUp2 = movieId
  //       resolve();
  //     }, delay)
  //   })
  // }

  // const tempChoices = [...(Object.values(hash))]
  // function getThree(arr) {
  //   const theseChoices = []
  //   theseChoices.push(arr.pop([Math.floor(Math.random() * arr.length)]));
  //   theseChoices.push(arr.pop([Math.floor(Math.random() * arr.length)]));
  //   theseChoices.push(arr.pop([Math.floor(Math.random() * arr.length)]));
  //   console.log("the array receiving the ids inside of getThree", theseChoices)
  //   console.log("this is the array I'm expecting is modified in place", arr)
  //   return theseChoices
  // }

  // console.log("these were all the original choices", tempChoices)
  // const theFutureArray = getThree(tempChoices)

  // async function rotateFutures(arr) {
  //   // await loadUpWithDelay(arr[0], animationLength * 1000)
  //   changeMeUp2 = theFutureArray[0]
  //   console.log(changeMeUp2)
  //   res.render('theFuture.ejs', { begin: start, end: finish, theLink: changeMeUp2, animationLength: animationLength})
  //   await loadUpWithDelay(arr[1], animationLength * 1000)
  //   console.log(changeMeUp2)
  //   await loadUpWithDelay(arr[2], animationLength * 1000)
  //   console.log(changeMeUp2)
  // }

  // rotateFutures(theFutureArray)

  
  res.render('theFuture.ejs', { begin: start, end: finish, theLink: changeMeUp, animationLength: animationLength})
  
})




app.listen(3000, () => {
  console.log("listening on port 3000")
})

