import React, { useEffect } from 'react'
import './BookCard.css'

const BookCard = ({data}) => {
// console.log(data,'=======>>>>>>>>>>>>>>>>>>');
  return (
    <section className="blog-card" key={data._id}>
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
