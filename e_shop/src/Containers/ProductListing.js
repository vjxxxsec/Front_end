import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'
import { setproduct } from '../Redux/actions/productaction'

const ProductListing = () =>{
    const products =useSelector( state => state)
    const dispatch = useDispatch()
    const fetchproducts = async () => {
        const response = await axios
        .get("https://fakestoreapi.com/products")
        .catch( err =>{
            console.log( "Err" ,err )
        } )
        dispatch(setproduct(response.data))
    }

    useEffect(() => {
        fetchproducts()
    } ,[])
    
    console.log("products: " , products)
    return(
        <div className="ui grid container">
        <ProductComponent/>    
        </div>
    )
  
}

export default ProductListing