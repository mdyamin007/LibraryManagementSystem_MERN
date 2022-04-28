/* eslint-disable @typescript-eslint/member-delimiter-style */
import mongoose, { Document } from 'mongoose'

export type BookDocument = Document & {
  title: string
  publishedYear: number
  genres: string[]
  pages: number
  rating: number
  quantity: number
  authorId: string[]
}

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
    min: 1800,
  },
  genres: [String],
  pages: {
    type: Number,
    required: true,
    min: 1,
  },
  rating: {
    type: Number,
    min: 1,
  },
  quantity: {     
    type: Number,
    required: true,
    min: 1,
  },
  author: [{ type: mongoose.Types.ObjectId, ref: 'Author' }],
  userBorrowBook: [{ type: mongoose.Types.ObjectId, ref: 'User' }],
})

export default mongoose.model<BookDocument>('Book', bookSchema)
