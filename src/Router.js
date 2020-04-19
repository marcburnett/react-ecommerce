import React from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from './Home'
import Cart from './Cart'
import Pay from './Pay'

function Router(){
    return(
        <Switch>
            <Route exact path='/'>
                <Home />
            </Route>

            <Route path='/cart'>
                <Cart />
                
            </Route>

            <Route path='/pay'>
                <Pay />
                
            </Route>
        </Switch>
    )
}

export default Router