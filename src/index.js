

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World! from 53070077'))

app.listen(port, () => console.log(`Web app listening on port ${port}!`))

