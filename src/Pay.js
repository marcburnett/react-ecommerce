import React from 'react'
import Header from './Header'
import Total from './Total'

function Pay(props){

    return(
        <>

            <Header />

            <h1>Make Payment here</h1>

            <div className='cart-total  bg-primary'>
            <Total />
            </div>
        </>
    )

}

export default Pay