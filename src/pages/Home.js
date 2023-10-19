import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import HomeInterfase from '../components/HomeInterfase'
import BookCard from '../components/BookCard'
import { base_url } from '../utils/baseUrl'
import Heading from '../components/Heading'
import { json, useNavigate } from 'react-router-dom'
import ShowOnLogin from '../components/hiddenLink/hiddenLink'

const Home = () => {
  const [productData, setProductData] = useState([])
  const navigate = useNavigate();
  const getallProduct = async()=>{
    const response = await axios.get(`${base_url}product/`);
    const data =await response.data
    setProductData(data);
    // console.log(data);
  }

  useEffect(()=>{
    const data = localStorage.getItem('user');
    const objData = JSON.parse(data)
    const token = objData?.token;
    if(!token===true){
      navigate('/')
    } else{
      navigate('')
    }
    getallProduct()
  },[])
  return (
    <div className="home">
      <HomeInterfase/>
      <div>
        <Heading heading='Product'/>
      </div>
      <ShowOnLogin/>
      <div className="book-list">
        {productData?.map((ele,index)=>{
          // console.log(index,ele);
          return(
              <BookCard data={ele} key={index}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home