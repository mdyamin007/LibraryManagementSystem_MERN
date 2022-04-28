import express from 'express'
import lusca from 'lusca'
import dotenv from 'dotenv'

import movieRouter from './routers/movie'
import usersRouter from './routers/user'
import booksRouter from './routers/book'
import authorsRouter from './routers/author'
import apiErrorHandler from './middlewares/apiErrorHandler'
import apiContentType from './middlewares/apiContentType'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/users', usersRouter)
app.use('/api/v1/authors', authorsRouter)
app.use('/api/v1/books', booksRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
