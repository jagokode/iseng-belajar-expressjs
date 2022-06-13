const express = require('express')
const app = express()
const { logger } = require('./middleware/logger')

// use logger middleware
// app.use('/api', logger) // apply only to this route
app.use(logger) // apply to all route

app.get('/', (req, res) => {
    res.send('Home')
})
app.get('/about', (req, res) => {
    res.send('About')
})
app.get('/api/products', (req, res) => {
    res.send('Products')
})
app.get('/api/items', (req, res) => {
    res.send('Items')
})


app.listen(5000, () => console.log(`Server is running on port 5000`));
