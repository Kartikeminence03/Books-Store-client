import React, { useState } from 'react'
import {BsFillCartPlusFill, BsCartCheckFill} from 'react-icons/bs'
import './BookCard.css'

const BookCard = ({data}) => {
  const [addToCart, setAddToCart] = useState(false)
  return (
    <section className="bg-white shadow-lg rounded-lg p-6 m-4" key={data._id}>
      <div key={data._id}>
        <div className="flex items-center justify-between">
      <h1 className="text-2xl font-semibold text-gray-800">{data.title}</h1>
      {addToCart === true ? (
        <BsCartCheckFill className="text-green-400 text-2xl" />
      ) : (
        <BsFillCartPlusFill className="text-gray-500 text-2xl" />
      )}
    </div>
    
      <p className="text-gray-600 mt-4">{data.description}</p>

      <div className="flex justify-between items-center mt-4">
        <p className="text-green-600 font-semibold text-xl">₹ {data.price}</p>
        <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-400 focus:outline-none"
        onClick={()=> setAddToCart(!addToCart)}
        >
          Add To Cart
        </button>
      </div>
      </div>
    </section>
  )
}

export default BookCard
