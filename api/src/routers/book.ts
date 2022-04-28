import express from 'express'
import * as bookController from '../controllers/book'

const router = express.Router()

router.route('/').get(bookController.findAll).post(bookController.createBook)

router
  .route('/:bookId')
  .get(bookController.findById)
  .put(bookController.updateBook)
  .delete(bookController.deleteBook)

export default router
