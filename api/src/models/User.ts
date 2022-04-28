import mongoose, { Date, Document } from 'mongoose'

export type UserDocument = Document & {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  borrowBook: {
    bookId: string
    getBorrow: Date
    returnBook: Date
  }[]
}

const bookSchema = new mongoose.Schema({
  firstName: {
    type: String,
    index: true,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  borrowBook: [
    {
      bookId: {
        type: mongoose.Types.ObjectId,
        ref: 'Book',
      },
      getBorrow: Date,
      returnBook: Date,
    },
  ],
})

export default mongoose.model<UserDocument>('User', bookSchema)
