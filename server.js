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

const hats = {
  'chef': {
    src: 'squid-hat.png',
    alt: "A giant squid, adorned with a chef's hat, floating ominously on the page",
    title: "The Monitor from Blaseball.com",
    type: "squid"
  },
  'fedora': {
    src: 'fedora-squid.svg',
    alt: "A giant squid, adorned with a fedora, floating ominously on the page",
    title: "Giant Squid by Delapouite, Fedora by Lorc; game-icons.net",
    type: "squid"
  },
  'default': {
    src: 'giant-squid.svg',
    alt: "A giant squid, floating ominously on the page",
    title: "Giant Squid by Delapouite at game-icons.net",
    type: "squid"
  },
  'ballclark': {
    src: 'ballclark.png',
    alt: 'An angry bbaseball, floating ominously on the page',
    title: "Ball Clark by Quinns at People Make Games",
    type: "squid"
  },
  'sunglasses': {
    src: 'sunglasses-squid.png',
    alt: 'A giant squid, adorned with sunglasses, floating ominously on the page',
    title: "The Monitor with sunglasses from Blaseball.com",
    type: "squid"
  },
  'coin': {
    src: 'coin.png',
    alt: 'A giant coin, floating ominously on the page',
    title: "The Boss from Blaseball.com",
    type: "coin"
  },
  'scattered':{
    src: 'scattered.png',
    alt: 'A giant coin with graphical glitches, floating ominously on the page',
    title: "The Boss from Blaseball.com",
    type: "coin"
  }
};

app.get('/', (req, res) => {

    res.render("index",{
        text: req.query.text ?? "",
        src: hats[req.query.type ?? 'default']?.src ?? hats.default.src,
        title: hats[req.query.type ?? 'default']?.title ?? hats.default.title,
        alt: hats[req.query.type ?? 'default']?.alt ?? hats.default.alt,
        type: hats[req.query.type ?? 'default']?.type ?? hats.default.type
    })
  })

app.get("/breathe",(req,res)=>{
  res.sendFile("/breathe.html", {root: __dirname+"/public"})
})
  
app.use(express.static('public'))



app.use(function (req,res,next){
	res.status(404).render("index",{
    text: "404; where's jaylen?",
    src: hats.default.src,
    title: hats.default.title,
    alt: hats.default.alt,
    type: hats.default.type
})
});
  
app.listen(port, () => {
console.log(`Listening on ${port}`)
})