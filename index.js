require('dotenv').config()
const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./rotes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const path = require('path')

const PORT = process.env.PORT || 5000
const app = express()


app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    })
)
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static'))) //for getting img from static folder
app.use(fileUpload({}))
app.use('/api', router)


app.use(errorHandler) // must be on the last place (last MiddleWare)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log("Server started on PORT: ", PORT)
        })
    } catch (e) {
        console.log('Error: ', e)
    }

}

start()



