import React from 'react'
import "./style.less"
import Swiper from '../../components/Swiper'
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'

const Home=()=>{
    return(
        <div>
            <HomeSearch/>
            <div id='swiper-home'>
            <p><strong>精彩电影</strong></p><br/>
            <Swiper banners={[Banner1,Banner2,Banner3]}
                id='swiper-home'
            />
            </div>
            
        </div>
    )
}
function HomeSearch(){
    return(
        <div className='HomeSearch'>
            <div ><img  className='home-search-tu'
            src='https://tse4-mm.cn.bing.net/th/id/OIP-C.dBr7MmPncuvzT0NLXUwm2wAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            
            /></div>
            <div>
            <form>
                <input
                placeholder='搜索'
                className='home-search'
                />
            </form>
            </div>
        </div>
    )
}
function Homeluntu(){
    return(
        <div>
            
        </div>
    )
}

export default Home