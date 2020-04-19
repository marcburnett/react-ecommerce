import React from 'react'

import {useSelector, useDispatch} from 'react-redux'

const dispatch = useDispatch()

import {addItemToCart} from './index'
import {removeItemFromCart} from './index'


function Buttons(props){
    return(
        <h1>Hello</h1>
//         <>
//         <div className="btn-group" role="group">
//   <button onClick= {() => dispatch(removeItemFromCart({props}))} type="button" class="btn btn-danger ">-</button>
//   <button className="btn btn-transparent btn-wide">{props.quantity}</button>
//   <button onClick= {() => dispatch(addItemToCart({props}))} type="button" class="btn btn-success ">+</button>
// </div>
//         </>
    )
}

export default Buttons