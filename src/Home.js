import React from 'react'

import {useSelector} from 'react-redux'
import products from './products.json'


import Header from './Header'
import Product from './Product'

function Home(){

    const Cart = useSelector(state => state.cart)

    //console.log(Cart)

    const ids = []
    Cart.map(item => ids.push(item.props.item.id))

    function Counter(element) {
        let counter = 0;
        for (const input of ids) {
          if (input === element) counter += 1;
        }
        return counter;
      }
      
     const items = products.map((item, index) => (
         <>
                    <Product key={item.id}  quantity = {Counter(index+1)} item = {item} />
                    
                    </>
     )
                    )

    return(
        <>

        <Header />

        <div className = 'cont'>
        <div className = 'row justify-content-between mt-3' style={{display: 'inline'}}>
        {items}
        

        </div>
        </div>
        </>
    )
}

export default Home