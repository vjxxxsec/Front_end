import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { selectedproduct ,removeselectedproducts} from '../Redux/actions/productaction'

const Productdetail = () =>{
    const product = useSelector(state => state.product)
    const {productid} = useParams()
    const dispatch = useDispatch()
    console.log(product)
    const {title,image,price,category,description} = product

    const fetchproductDetail = async(id) =>{
        const response = await axios
        .get(`https://fakestoreapi.com/products/${id}`)
        .catch((err) => {
            console.log("Err",err)
        })
        dispatch(selectedproduct (response.data))
        }
    
    useEffect(() =>{
        if (productid && productid !== "")
            fetchproductDetail(productid)
        return () => {
            dispatch(removeselectedproducts())
        }
    } ,[productid] )
    return(
        <div className="ui grid container">
        {Object.keys(product).length === 0 ? (
          <div>...Loading</div>
        ) : (
          <div className="ui placeholder segment">
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">AND</div>
              <div className="middle aligned row">
                <div className="column lp">
                  <img className="ui fluid image" src={image} />
                </div>
                <div className="column rp">
                  <h1>{title}</h1>
                  <h2>
                    <a className="ui teal tag label">${price}</a>
                  </h2>
                  <h3 className="ui brown block header">{category}</h3>
                  <p>{description}</p>
                  <div className="ui vertical animated button" tabIndex="0">
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
        }

export default Productdetail   