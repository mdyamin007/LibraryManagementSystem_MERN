import User, { UserDocument } from '../models/User'
import { NotFoundError } from '../helpers/apiError'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../util/secrets'

const create = async (user: UserDocument): Promise<UserDocument> => {
  return user.save()
}

const findOne = async (email: string): Promise<UserDocument> => {
  const foundUser = await User.findOne({ email })

  if (!foundUser) {
    throw new NotFoundError(`User with this email - ${email} is not registered`)
  }

  return foundUser
}

const findById = async (userId: string): Promise<UserDocument> => {
  const foundUser = await User.findById(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const findAll = async (): Promise<UserDocument[]> => {
  return User.find().sort({ name: 1, publishedYear: -1 })
}

const update = async (
  userId: string,
  update: Partial<UserDocument>
): Promise<UserDocument | null> => {
  const foundUser = await User.findByIdAndUpdate(userId, update, {
    new: true,
  })

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const deleteUser = async (userId: string): Promise<UserDocument | null> => {
  const foundUser = User.findByIdAndDelete(userId)

  if (!foundUser) {
    throw new NotFoundError(`User ${userId} not found`)
  }

  return foundUser
}

const generateToken = async (userId: string): Promise<string> => {
  return jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: '30d',
  })
}

export default {
  create,
  findById,
  findAll,
  update,
  deleteUser,
  findOne,
  generateToken,
}
