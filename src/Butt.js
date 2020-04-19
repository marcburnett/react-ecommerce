import React from 'react'

import {useDispatch} from 'react-redux'
import {addItemToCart} from './index'
import {removeItemFromCart} from './index'


function Butt(props){

    const dispatch = useDispatch()

    // console.log(props.newProps)
    // console.log(props)

    return(
        
        <>
        <div className="btn-group" role="group">
  <button onClick= {() => dispatch(removeItemFromCart({props}))} type="button" class="btn btn-danger ">-</button>
  <button className="btn btn-transparent btn-wide">{props.props.quantity}</button>
  <button onClick= {() => dispatch(addItemToCart({props}))} type="button" class="btn btn-success ">+</button>
</div>
        </>
    )
}

export default Butt