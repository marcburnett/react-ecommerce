import React from 'react'

import {useDispatch} from 'react-redux'
import {addItemToCart} from './index'
import {removeItemFromCart} from './index'


function Product (props){
 
    const dispatch = useDispatch()
     
    return(
        <>

        <div className="card col-md-4 offset-md-2 mt-5" >
  <img src={require(`./img/${props.item.img}`)} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.item.title}</h5>
    <p className="card-text">{props.item.description}</p>
    <p className="card-text">{props.item.price}</p>

   
    
       
    <div className="btn-group" role="group">
  <button onClick= {() => dispatch(removeItemFromCart({props}))} type="button" class="btn btn-danger ">-</button>
  <button className="btn btn-transparent btn-wide">{props.quantity}</button>
  <button onClick= {() => dispatch(addItemToCart({props}))} type="button" class="btn btn-success ">+</button>
</div>

  </div>
    </div>
  
    
    
        </>
    )
}

export default Product