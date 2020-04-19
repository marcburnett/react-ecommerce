import React from 'react'

export function addItemToCart(cartItem){
   return{
    
    type: 'ADD ITEM TO CART',
    payload: cartItem

   } 
}

export function removeItemFromCart(cartItem){
    return{
     
     type: 'REMOVE ITEM FROM CART',
     payload: cartItem
 
    } 
 }

 function reducer(state = [], action){

    switch(action.type){

        case 'ADD ITEM TO CART':
            console.log('Hello')
            //return [...state, action.payload]

        case 'REMOVE ITEM FROM CART':
            return [...state, action.payload]

        default:
            return state

    }


 }

 





