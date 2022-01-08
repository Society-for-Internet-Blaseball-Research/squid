require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.port || 8080

var { Liquid } = require('liquidjs');
var engine = new Liquid();

// register liquid engine
app.engine('liquid', engine.express()); 
app.set('views', './views');            // specify the views directory
app.set('view engine', 'liquid');       // set liquid to default

app.get('/', (req, res) => {
    res.render(index,{
        
    })
  })
  
app.listen(port, () => {
console.log(`Listening on ${port}`)
})