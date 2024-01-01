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
            <div className='left-main'>
                <div id='swiper-home'>
                    <p
                        style={{ fontSize: '30px', color: 'crimson' }}
                    ><strong>精彩电影</strong></p><br />
                    <Swiper banners={[Banner1, Banner2, Banner3]}

                    />
                </div>
            </div>

{/* 左边内容 */}
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

                            </div><br />
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

                            </div><br />
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

                            </div><br />
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

                            </div><br />
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

                            </div><br />
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

                            </div><br />
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

                            </div><br />
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

                            </div><br />
                            <div className='film-up-time'>2024年1月5日上映</div>
                        </li>
                    </ul>

                </div><br />

                <div>

                    {/* 第三部分影视片 */}
                    <div>
                        <ul className='film-sources-list'>
                            {/* long */}
                            <li style={{width: "341px"}}>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                style={{width: "341px"}}
                                                className='film-sources-img'
                                                src='https://p0.meituan.net/movie/9bf6ede4308db272cd699d82e7d487a853438.jpg@350w_220h_1e_1c' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'
                                            style={{transform: "translate3d(316px, -50px, 0px)"}}
                                        >
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            {/* short */}
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
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


{/* 右边内容 */}
            <div className='right-main'>
                {/* 图片 */}
                <div className='right-main-logo'>
                    
                </div>
                {/* 今日票房 */}
                <div className='today-ticket'>
                    <ul>
                        {/* 1 */}
                        <li className='today-ticket-one'>
                            <a href='#'>
                                <div className='today-ticket-photo'>
                                    <img src='https://p0.pipi.cn/friday/1709606769068a4e346864b11b696d02.jpg?imageView2/1/w/120/h/80'/>
                                </div>
                                <div className='today-ticket-name'>
                                    <span>电影名字</span>
                                    <p>12312万</p>
                                </div>
                            </a>
                        </li>
                        {/* 2 */}
                        {/* <li>
                            <a>
                                <span>
                                    <i>1</i>
                                    <span>电影名</span>
                                    <span>122万</span>
                                </span>
                            </a>
                        </li> */}
                    </ul>
                </div>

                {/* 最受期待 */}
                <div className='expect-ticket'>

                </div>

                {/* 排行榜 */}
                <div className='top-ticket'>

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