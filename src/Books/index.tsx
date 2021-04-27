import React, { useState } from 'react'

interface BookProps extends BookItem {
  index: number
  name: string
  authors: string
  numberOfPages: number
}

interface BookItem {
  name: string
  authors: string
  numberOfPages: number
}

const Books: React.FC = () => {
  const [books, setBooks] = useState([])

  const fetchData = (): void => {
    const apiUrl = 'https://anapioficeandfire.com/api/books'
    fetch(apiUrl)
      .then(async result => await result.json())
      .then(data => setBooks(data))
      .catch(err => console.error(err))
  }

  return (
    <div>
      <p className='text-3xl font-bold'>Books</p>
      <p className='mt-2 mb-4'>Fetch a list from api & display it</p>
      <button
        className='w-40 h-12 text-2xl bg-green-400 text-white rounded-md'
        onClick={fetchData}
      >
        Fetch Data
      </button>
      <div className='flex mx-auto mt-10 flex-wrap'>
        {books?.map((item: BookItem, index) => {
          return <Book index={index} {...item} />
        })}
      </div>
    </div>
  )
}

const Book: React.FC<BookProps> = ({ index, name, authors, numberOfPages }) => {
  return (
    <div className='w-1/5 min-w-1/5 py-4 m-8 bg-yellow-100 rounded-md'>
      <p className='text-2xl font-bold'>{index + 1}</p>
      <p className='text-2xl font-bold'>{name}</p>
      <p className='mt-8'>{authors}</p>
      <p className=''>{numberOfPages} Pages</p>
    </div>
  )
}

export default Books
