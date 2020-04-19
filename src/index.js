import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'

import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'

import './index.css';
import App from './App';

const initialState = {
  cart: [],
  quantity: 0,
  
}

const store = createStore(reducer);
//store.subscribe(() => {console.log(store.getState())} )

ReactDOM.render(
  <Provider store = {store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

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

function reducer(state = initialState, action){

   switch(action.type){

       case 'ADD ITEM TO CART':
           return {
             cart: [...state.cart, action.payload],
             
           }

       case 'REMOVE ITEM FROM CART':

        function isEquivalent(a, b) {
          // Create arrays of property names
          var aProps = Object.getOwnPropertyNames(a);
          var bProps = Object.getOwnPropertyNames(b);
      
          // If number of properties is different,
          // objects are not equivalent
          if (aProps.length !== bProps.length) {
              return false;
          }
      
          for (var i = 0; i < aProps.length; i++) {
              var propName = aProps[i];
      
              // If values of same property are not equal,
              // objects are not equivalent
              if (a[propName] !== b[propName]) {
                  return false;
              }
          }
      
          // If we made it this far, objects
          // are considered equivalent
          return true;
      }

              
        let results = []

        for(let i=0; i<state.cart.length; i++){
         results.push(isEquivalent(action.payload.props.item, state.cart[i].props.item));
        }
   
        console.log(results)
   
        let index = results.indexOf(true)
   
        console.log(index)
        console.log(...state.cart)
   
        console.log(state.cart[0])
         
   
           if(index > -1){



      
             
      // Outputs: true
      //console.log(isEquivalent(action.payload.props.item.id, state.cart[0].props.item.id));

      console.log(state.cart[0].props.item);
      console.log(action.payload.props.item);

      

          let newArray = [...state.cart].slice(0, index).concat([...state.cart].slice(index+1))

            console.log(newArray)

            return {
           
            cart: newArray

        }
            
      }
          
      break
        
       default:
           return state
           

   }


}


export {BrowserRouter, Provider}
