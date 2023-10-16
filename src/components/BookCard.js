import React from 'react'
import './BookCard.css'

const BookCard = () => {
  return (
    <section className="blog-card">
      <img
        src="https://fastly.picsum.photos/id/949/1200/800.jpg?hmac=mW-_YmIqUMbyF5ydxz0QPn1GHneBWJEVlNCValTT5xw"
        alt="white palace ceiling view"
      />
      <div className="blog-content">
        <p className="blog-label">Technology</p>
        <h1>Lorem ipsum dolor sit amet.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          aliquid sunt temporibus repellendus neque, quibusdam exercitationem.
        </p>
        <div className="author">
          <img
            src="https://fastly.picsum.photos/id/821/600/600.jpg?hmac=dW9EOnYxt9yoVvUndFExUXzPNEYbMjpYcKj3Au5zEWQ"
            alt="author portrait"
          />
          <p>by Jeanne Doe</p>
        </div>
      </div>
    </section>
  )
}

export default BookCard
