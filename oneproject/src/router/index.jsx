import React from 'react'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import User from '../pages/User'
import TopNav from '../components/TopNav/indext'

const AppRouter=()=>{
    return(
        <Router>
            <TopNav/>
            
            <Routes>
                <Route path='/' Component={Home}></Route>
                <Route path='/shop' Component={Shop}></Route>
                <Route path='/user' Component={User}></Route>
            </Routes>
        </Router>
    )
}

export default AppRouter