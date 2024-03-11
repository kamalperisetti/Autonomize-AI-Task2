import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

const AllProducts = () => {
  const [error, setError] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    getApiResults();
  }, [])

  const getApiResults = async () => {
    
    try{
      const url = 'https://fakestoreapi.com/products'
    const response = await fetch(url)
    const data = await response.json()
    if(!response.ok){
      setError(response.statusText)
    }else{
      setData(data)
    }
    
    }catch(error){
     setError(error.message)
    }
    
  }
    return (
        <div className='container'>
           
            <h1>All Products</h1>
            <p>{error}</p>
            <ul className='list-container'>
              {data.map((each) => (
               <Link className='link' to = {`/products/${each.id}`}>
                <li className='list-items' key = {each.id}>
                  <img className='image' src = {each.image} alt={each.title} />
                  <p className='title'>{each.title}</p>
                </li>
                </Link>
              ))}
            </ul>  
        </div>
    )
    }

export default AllProducts