import React from 'react'
import { HashRouter as Router,Route,Routes } from 'react-router-dom'
import Home from '../pages/Home'
// import Shop from '../pages/Shop/Shopye/'
import User from '../pages/User'
// 正在热映 即将上映 经典影片
import ClaFil from '../pages/Shop/Shopye/ClaFil'
import NowFil from '../pages/Shop/Shopye/NowFil'
import UpFil from '../pages/Shop/Shopye/UpFil'
// 分类：爱情 喜剧 动画片
import LoveCla  from '../pages/Shop/Shopyedif/LoveCla'
import Comedy from '../pages/Shop/Shopyedif/Comedy'
import Cartoon from '../pages/Shop/Shopyedif/Cartoon'
// 注册页
import Register from '../pages/User/Register/index'
// 详情页
import Onehome from '../pages/detail/onehome'

// 搜索页详情
import Searchmain from '../pages/Searchmain/index'

import TopNav from '../components/TopNav/indext'
// import Buttonzu from '../components/Buttonzu/index'

const AppRouter=()=>{
    return(
        <Router>
          
           <div style={{width:'100%'}}>
           <TopNav />
           </div>
           
            
            <Routes >
                {/* 首页 */}
                <Route path='/' Component={Home}></Route>
                {/* <Route path='/shop' Component={Shop}></Route> */}
                <Route path='/user' Component={User}></Route>
                {/* 正在热映 即将上映 经典影片*/}
                <Route path='/nowfil' Component={NowFil}></Route>
                <Route path='/upfil' Component={UpFil}></Route>
                <Route path='/clafil' Component={ClaFil}></Route>
                {/* 分类：爱情 喜剧 动画片 */}
                <Route path='/lovecla' Component={LoveCla}></Route>
                <Route path='/comedy' Component={Comedy}></Route>
                <Route path='/cartoon' Component={Cartoon}></Route>
                {/* 注册页 */}
                <Route path='/register' Component={Register}></Route>
                {/* 详情页 */}
                <Route path='/onehome' Component={Onehome}></Route>
                {/* 搜索页详情 */}
                <Route path='/searchmain' Component={Searchmain}></Route>

            </Routes>
            {/* 底部 */}
            {/* <Buttonzu style={{"position": "absolute",
    "bottom": "0%"}}/> */}
        </Router>
        
    )
}

export default AppRouter