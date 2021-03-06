const express = require('express')
const app = express()
const port = 3000

const myLogger = (req, res, next) => {
  const reqstartTime = new Date() 
  res.on('finish', () => {
    const resendTime = new Date() 
    console.log(`${reqstartTime.toLocaleString()} | ${req.method} from ${req.originalUrl} | total time: ${resendTime - reqstartTime} ms`)
  })

  next()
}

app.use(myLogger)


app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
