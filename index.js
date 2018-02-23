const express = require('express')
const app = express()
var counter = 0
var id = Math.floor(Math.random()*100)
app.get('/', (req, res) => res.send('Hello World! Nb of visits is ' + ++counter + ' from instance ' + id))
app.listen(3000, () => console.log('Example app listening on port 3000!'))