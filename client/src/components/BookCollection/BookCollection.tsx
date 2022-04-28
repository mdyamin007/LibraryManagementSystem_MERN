import React from 'react'
import BookCard from '../BookCard/BookCard'

function BookCollection() {
  return (
    <div className="w-full pb-32 bg-blue-100">
        <div className="text-center py-10"><h1 style={{fontSize: "6rem"}} className="text-black font-bold font-title">Book Collections....</h1></div>
        <div className="container mx-auto">
            <div className="flex gap-4 overflow-x-scroll w-full">
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
                <BookCard title={"Name of the book"}/>
            </div>
        </div>
       
 
    </div>
  )
}

export default BookCollection