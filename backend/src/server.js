
import dotenv from 'dotenv'
import express from 'express'
import notesRoutes from './routes/notesRoutes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use('/api/notes', notesRoutes)






app.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})