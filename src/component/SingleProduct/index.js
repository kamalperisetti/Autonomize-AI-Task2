import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom";
import './index.css'

const ProductDetails = () => {
    const [product, setProducts] = useState([])
    const params = useParams()
    useEffect(() => {
        productDetails()
    })

    const productDetails = async () => {
        const {id} = params

        try{
            const url = `https://fakestoreapi.com/products/${id}`
            const response = await fetch(url)
            const data = await response.json()
            setProducts(data)
          }catch(error){
           console.log(error.message)
          }
      }


    return (
        <div className="details-container">
            <h1 className="product-heading">{product.title}</h1>
            <Link className="link" to = '/'>All Products</Link>
            <div className="details">
                <div className="img-container">
                    <img className="product-image" src={product.image} alt = {product.title``} />
                </div>
                <div className="product-content">
                    <p><span className="span">Discription:</span> {product.description}</p>
                    <p><span className="span">Category:</span> {product.category}</p>
                    <p><span className="span">Price:</span> {product.price}</p>
                </div>
            </div>
            
        </div>
    )
}

export default ProductDetails