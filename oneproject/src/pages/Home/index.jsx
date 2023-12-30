import React from 'react'
import "./style.less"
import Swiper from '../../components/Swiper'
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'

const Home = () => {
    return (
        <div>
            {/* 搜索框 */}
            <HomeSearch />
            {/* 电影轮播图 */}
            <div>
                <div id='swiper-home'>
                <p
                style={{fontSize:'30px',color:'crimson'}}
                ><strong>精彩电影</strong></p><br />
                <Swiper banners={[Banner1, Banner2, Banner3]}
                    id='swiper-home'
                />
            </div>
            </div>

            <div className='film-source'>
                {/* 正在热映 */}
                <div>
                    <p
                    style={{fontSize:'25px',color:'red'}}
                    ><strong>正在热映（102部）</strong></p><br/>

                    <div className='film-source-all'>
                        {/* 图片 */}
                        <div style={{width:'200px'}}>
                            <img  
                            className='film-source-img'
                            src='https://p0.pipi.cn/mmdb/fb73862f8ea0fa31395bf13f9e470883b4d8c.jpg?imageView2/1/w/160/h/220'/>
                        </div>

                        {/* 名称 */}
                            <div className='film-source-name'>
                                <strong>一闪一闪亮晶晶</strong>
                            </div>
                        {/* 评分 */}
                            <div className='film-source-score'>
                                9.0
                            </div>
                        {/* 购票：点击会红 */}
                        <div className='film-source-ticket'>
                            购 票
                        </div>
                    </div>
                    
                </div>
                {/* 即将上映 */}
                <div>
                    <p
                    style={{fontSize:'25px',color:'skyblue'}}
                    
                    ><strong>即将上映（109部）</strong></p>
                </div>
            </div>

        </div>

    )
}
function HomeSearch() {
    return (
        <div className='HomeSearch'>
            <div ><img className='home-search-tu'
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
function Homeluntu() {
    return (
        <div>

        </div>
    )
}

export default Home