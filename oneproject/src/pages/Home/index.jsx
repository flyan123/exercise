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
                        style={{ fontSize: '30px', color: 'crimson' }}
                    ><strong>精彩电影</strong></p><br />
                    <Swiper banners={[Banner1, Banner2, Banner3]}

                    />
                </div>
            </div>


            <div className='film-source'>
                {/* 正在热映 */}

                <div>
                    <p
                        style={{ fontSize: '25px', color: 'red' }}
                    ><strong>正在热映（102部）</strong></p><br />

                    <ul className='film-source-list'>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        <li><div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                    </ul>


                </div>
                {/* 即将上映 */}
                <div className='film-up'>
                    <p style={{ fontSize: '25px', color: 'skyblue' }}
                    ><strong>即将上映（109部）</strong></p><br />
                    {/* 内容 */}
                    <ul className='film-up-list'>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>

                                   <div className='film-up-future-p'>
                                     <a className='film-up-future-p-a'>预告片</a>
                                   </div>

                                    <div className='film-up-future-in'>
                                        <a className='film-up-future-in-a'>预告</a>
                                    </div>

                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>
                                    <a className='film-up-future-p'>预告片</a>
                                    <a className='film-up-future-in'>预告</a>
                                </div>

                            </div><br/>
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>
                    </ul>

                </div><br/>

                <div>
                    
                {/* 第三部分影视片 */}
                <div>
                    <ul className='film-sources-list'>
                        <li>
                            <div className='film-sources-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.meituan.net/movie/9bf6ede4308db272cd699d82e7d487a853438.jpg@350w_220h_1e_1c' />
                                </div>

                                {/* 名称 */}
                                <div className='film-sources-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-sources-score'>
                                    9.0
                                </div>
                            </a>
                        </div>
                        </li>
                    </ul>

                </div>
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