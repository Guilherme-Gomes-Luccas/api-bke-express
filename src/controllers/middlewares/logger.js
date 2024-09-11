const logger = (req, res, next) => {
    console.log(`${new Date(Date.now()).toLocaleDateString()} ${req.method} ${req.url}`)
    next()
}

export default logger