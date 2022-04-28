import express from 'express'
import * as userController from '../controllers/user'

const router = express.Router()

router.route('/').get(userController.findAll).post(userController.createUser)

router
  .route('/:userId')
  .get(userController.findById)
  .put(userController.updateUser)
  .delete(userController.deleteUser)

export default router
