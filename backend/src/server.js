
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import notesRoutes from './routes/notesRoutes.js'
import rateLimiter from './middleware/rateLimiter.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5001

// middlewares
app.use(express.json())

app.use(cors({
    origin: 'http://localhost:5173',
}))
app.use(rateLimiter)


app.use('/api/notes', notesRoutes)

// connect to DB and then start to listen on different ports
// we do this in production, because there is not point of starting the app if the database connection fails.
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server started on PORT: ${PORT}`)
    })
})

