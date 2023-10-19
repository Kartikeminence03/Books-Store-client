import React, { useState } from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import './BookCard.css'

const BookCard = ({data}) => {
  const [wishlist, setWishlist] = useState(false)
  return (
    <section className="blog-card" key={data._id}>
      {wishlist=== true?(
        <AiFillHeart className='wish wishlist-true'/>
      ) : (
        <AiOutlineHeart className='wish'/>
      )}
      
      <div className="blog-content">
        <h1>{data.title}</h1>
        <p>
          {data.description}
        </p>
      </div>
      <div className="blog-content">
        <p className="blog-label">₹ {data.price}</p>
      </div>
      <div>
        <button>Bay</button>
      </div>
    </section>
  )
}

export default BookCard
