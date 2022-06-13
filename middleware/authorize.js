const authorize = (req, res, next) => {
    const { user } = req.query 
    if (user === 'jago') {
        req.user = { username: 'jago', id: 10 }
        next()
    } else {
        res.status(401).json({ message: 'Unauthorized' })
    }
}

module.exports = authorize