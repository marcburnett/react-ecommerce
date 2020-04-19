import React from 'react'

import {useSelector} from 'react-redux'

function Total(props){

    const Cart = useSelector(state => state.cart)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
      })


    let total=0
    let displayTotal

    
    for (let i=0; i<Cart.length; i++){
        total += Number(Cart[i].props.item.price.slice(1))
    }

     
        displayTotal = formatter.format(total)

   
      return(
        <div >
        Total = {displayTotal} 
        </div>
      )
}

export default Total