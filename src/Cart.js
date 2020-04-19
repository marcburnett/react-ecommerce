import React from 'react'

import Header from './Header'
import Total from './Total'

import {useSelector, useDispatch} from 'react-redux'

import {addItemToCart} from './index'
import {removeItemFromCart} from './index'

function Cart (props){
    
    const Cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
   
    console.log(Cart)
    

    const product = []
    const kim = [...Cart]
    for(let i = 0; i<kim.length; i++){
        product.push(kim[i].props)
    }
    console.log(product)
    console.log(product[0])
    
    
    const titles = []
    const prices = []

    Cart.map(item => titles.push(item.props.item.title))
    Cart.map(item => prices.push(item.props.item.price))

    function findObject(currentItem){
        for(let i=0; i<Cart.length; i++){
            if (currentItem === Cart[i].props.item.title){
                return Cart[i]
            }
        }
    }

    var count = function(ary, classifier) {
        return ary.reduce(function(counter, item) {
            var p = (classifier || String)(item);
            counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
            return counter;
        }, {})
    }

    const titleList = count(titles)
    console.log(titleList)

    const priceList = count(prices)
    console.log(priceList)

    const titleArray = Object.keys(titleList)
    console.log(titleArray)

    const priceArray = Object.keys(priceList)
    console.log(priceArray)

    const quantityArray = []
    for(let i = 0; i<titleArray.length; i++){
        quantityArray.push(titleList[titleArray[i]])
    }
    console.log(quantityArray)

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 2
      })
      
    //   formatter.format(1000) // "$1,000.00"
    //   formatter.format(10) // "$10.00"
    //   formatter.format(123233000) // "$123,233,000.00"

    const cartDisplay = []
    for(let i = 0; i<titleArray.length; i++){
        cartDisplay.push([titleArray[i], quantityArray[i], 
            priceArray[i], 
            formatter.format((quantityArray[i])*(
                parseFloat((priceArray)[i].slice(1)))
                             
                )]
                )
    }
    console.log(cartDisplay)
    console.log(Cart)

   const cartItems = cartDisplay.map((item) => 
        <>
 
    
    <tr>
      <th> {item[0]} </th>
      <td>
      <div className="btn-group" role="group">
      <button onClick= {() => dispatch(removeItemFromCart(findObject(item[0])))} type="button" class="btn btn-danger ">-</button>
          <button className="btn btn-transparent btn-wide">{item[1]}</button>
          <button onClick= {() => dispatch(addItemToCart(findObject(item[0])))} type="button" class="btn btn-success ">+</button>
          </div>
          </td>
      <td>{item[2]}</td>
      <td>{item[3]}</td>
      
    </tr>
        </>
   )
  
     
    

    return(
        <>

        <Header />

        <h1>Shopping Cart</h1>

        <div class="tableCont">
        <table class="table table-bordered">
  <thead >
    <tr className = ''>
      <th scope="col" className = 'trow bg-info'>Title</th>
      <th scope="col" className = 'trow bg-info'>Quantity</th>
      <th scope="col" className = 'trow bg-info'>Price</th>
      <th scope="col" className = 'trow bg-info'>SubTotal</th>
      
    </tr>
  </thead>
  <tbody p-3>
    {cartItems}
    
  </tbody>
</table>



</div>



<div className='cart-total  bg-primary'>
<Total />
</div>


        

       
      

      

        </>
    )
}

export default Cart

