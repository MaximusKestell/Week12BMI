// create a function to create a web page in
// response to different URLs
// each URL will have its own function that
// creates the web page that's sent to the browser

const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    console.log(req.query)
    const height = req.query.height
    const weight = req.query.weight
    res.render('index.hbs')
})

router.get('/cat', function(req, res) {
    res.send('meeow') // this could be replaced with
    // code that generates a complex web page.
})

router.get('/dog', function(req, res) {
    res.send('WufWuf')
})

module.exports = router