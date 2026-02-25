import express, { json } from 'express'

const app = express()
const PORT = 3000

app.use(express.json())

app.get('/', (req, res)=> {
  res.send('Hi API')
})

app.listen(PORT, ()=> {
  console.log(`Start Server http://localhost:${PORT}`)
})