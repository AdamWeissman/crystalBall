const express = require("express");
const app = express();
const path = require("path")
const PORT = process.env.PORT || 5000;
const { parseUserQuery } = require("./helper")

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.listen(PORT, () => console.log(`Listening on ${PORT}`));

app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.render('home.ejs')
})


// app.get('/theFuture', myMiddleWareParsingFunction(this takes request and response but you don't need to specify), (req, res) => {
app.get('/theFuture', (req, res) => {
  const userQuery = parseUserQuery(req.query["whatFuture"])
  console.log(userQuery)

  const start = 12 + Math.floor(Math.random() * 530);
  const finish = start + 8 + Math.floor(Math.random() * 13);
  const animationLength = (finish - start).toString();

  const changeMeUp = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)]
  }(Object.values(userQuery))

  res.render('theFuture.ejs', { begin: start, end: finish, theLink: changeMeUp, animationLength: animationLength })

})