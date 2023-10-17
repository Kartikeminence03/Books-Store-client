import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import HomeInterfase from '../components/HomeInterfase'
import BookCard from '../components/BookCard'
import { base_url } from '../utils/baseUrl'

const Home = () => {
  const [productData, setProductData] = useState([])
  const getallProduct = async()=>{
    const response = await axios.get(`${base_url}product/`);
    const data =await response.data
    setProductData(data);
    // console.log(data);
  }

  useEffect(()=>{
    getallProduct()
  },[])
  return (
    <div className="home">
      <HomeInterfase/>
      <div className="book-list">
        {productData?.map((ele,index)=>{
          // console.log(index,ele);
          return(
              <BookCard data={ele}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home