import React from 'react'
import { addToCart } from '../store/slices/cartSlice'
import { useDispatch, useSelector } from 'react-redux'

const Card = ({cardInfo}) => {

    const dispatch = useDispatch();
    const cart = useSelector(state=>state.cart);
    console.log(cart)
  return (
   
   

   
                <div className="card  col-md-4 mb-4">
                    <img className="card-img-top" src={cardInfo.image} alt={cardInfo.title} />

                    <div className="card-body p-4">
                        <div className="text-center">

                            <h5 className="fw-bolder">{cardInfo.title}</h5>

                         
                            ${cardInfo.price}
                        </div>
                    </div>

                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div className="text-center">
                        
                        <button className="btn btn-primary" onClick={() =>dispatch( addToCart(cardInfo))}>
                                    Add to Cart
                                    </button>
                        </div>
                    </div>
                </div>
           




   
 
  )
}

export default Card