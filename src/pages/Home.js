import React from 'react'
import axios from 'axios'
import './Home.css'
import HomeInterfase from '../components/HomeInterfase'
import BookCard from '../components/BookCard'
import { base_url } from '../utils/baseUrl'

const Home = () => {
  const getallProduct = async()=>{
    const response = await axios.get(`http://localhost:5000/api/product/`);
    const data =await response.data
    console.log(data);
  }

  getallProduct()
  return (
    <div className="home">
      <HomeInterfase/>
      <div className="book-list">
        <BookCard/>
        <BookCard/>
      </div>
    </div>
  )
}

export default Home