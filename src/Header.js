import React from 'react'

import {NavLink} from 'react-router-dom'

import Total from './Total'

function Header(){


    return(

        <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
    <NavLink exact to= '/' className='navbar-brand'>MeShopping Inc.</NavLink>
    </div>
    <ul className="nav floatleft">
      
      <li ><NavLink exact to= '/'>Home</NavLink></li>
      
      
    </ul>

    <ul className="nav ">
    <li className='floatright bg-info'><NavLink exact to= '#'>Login</NavLink></li>
    <li className='floatright'><NavLink exact to= '#'><Total /></NavLink></li>
    <li className='floatright'><NavLink exact to= '/pay'>Checkout</NavLink></li>
    <li className='floatright'><NavLink to= '/cart'>Cart</NavLink></li>
     
      
     
      
    </ul>

   
  </div>
</nav>
//         <div className = 'jumbotron'>
//         <div className="text-center">
//   <div className="card-header">

       
//     <ul className="nav nav-pills card-header-pills">
      

    
//       <li className="nav-item">
//         <NavLink exact to= '/'><h4>Home</h4></NavLink>
//       </li>
      
//       <li className="nav-item">
//       <NavLink to= '/cart'><h4>Cart</h4></NavLink>
//       </li>

//       <li className="nav-item">
//       <NavLink to= '/pay'><h4>Checkout</h4></NavLink>
//       </li>

//       <div className='header-total'>
//   <Total />
//         </div>
      
//     </ul>

   
//   </div>

        

//   </div>
// </div>
    )
}



export default Header