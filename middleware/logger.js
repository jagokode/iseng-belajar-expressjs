exports.logger = (req, res, next) => {
    const method = req.method
    const url = req.url 
    const time = new Date().toLocaleTimeString()
    console.log(method, url, time);
    next()
}