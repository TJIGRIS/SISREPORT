import express from 'express'
import dotenv from 'dotenv'
import conectarDB from './config/db.js'
import reporteRouter from './router/reporteRouter.js'
import tecnicoRouter from './router/tecnicoRouter.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

conectarDB()
dotenv.config()

const PORT = 4000

const app = express()
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:4321',
  credentials: true
}))

app.use(cookieParser())

app.use('/api/reportes', reporteRouter)
app.use('/api/tecnicos', tecnicoRouter)

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})
