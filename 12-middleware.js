const express = require('express')
const app = express()

// flow: req -> middleware -> res

// create middleware
const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const time = new Date().toLocaleDateString();
    console.log(method, url, time);
    next()
}

// apply middleware in route
app.get('/', logger, (req, res) => {    
    res.send('Home')
})
app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => console.log(`Server is running on port 5000`));