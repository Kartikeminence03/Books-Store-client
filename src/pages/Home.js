import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <header className="header">
        <h1>eCommerce Bookstore</h1>
        <p>Your Source for Great Books</p>
      </header>
      <main className="content">
        <section className="featured-books">
          <h2>Featured Books</h2>
          {/* Display featured books here */}
        </section>
        <section className="categories">
          <h2>Categories</h2>
          {/* Display book categories here */}
        </section>
      </main>
    </div>
  )
}

export default Home