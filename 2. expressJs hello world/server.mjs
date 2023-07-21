
import express from 'express'; 
const app = express()


app.get('/', (req, res) => {
    console.log('Hello World!' , new Date());
  res.send('Hello World!' + new Date())
})
app.get('/home', (req, res) => {
  console.log('this is home' , new Date());
res.send('this is home'  + new Date())
})
app.get('/about', (req, res) => {
  console.log('this is about' , new Date());
res.send('this is about'  + new Date());
})

app.get('/profile', (req, res) => {
  console.log('this is profile' , new Date());
res.send('this is profile'+ new Date());
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})