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
  const start = 10 + Math.floor(Math.random() * 100);
  const finish = start + 11 + Math.floor(Math.random() * 10);
  const animationLength = (finish - start).toString();
  
  const hash = { equilibrium: 'raleKODYeg0', independenceDay: 'B1E7h3SeMDk', iAmLegend: 'dtKMEAXyPkg', metropolis: 'GrFBId1b8U0', worldWarZ: 'Md6Dvxdr0AQ'}
  
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

