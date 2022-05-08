const Router = require('express')
const router = new Router()
const deviceRouter = require('./deviceRouter')

router.use('/food', deviceRouter)



module.exports = router
