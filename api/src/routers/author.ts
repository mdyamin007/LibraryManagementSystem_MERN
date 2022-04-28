import express from 'express'
import * as authorController from '../controllers/author'

const router = express.Router()

router
  .route('/')
  .get(authorController.findAll)
  .post(authorController.createAuthor)

router
  .route('/:authorId')
  .get(authorController.findById)
  .put(authorController.updateAuthor)
  .delete(authorController.deleteAuthor)

export default router
