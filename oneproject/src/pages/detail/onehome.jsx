import React from "react";
import './style.less'

const Onehome = () => {
    return (
        <div >
            {/* 年会不能停！详情页 */}
            {/* 头部 */}
            <div className="top-main">

                {/* 图片 */}
                <div className="top-main-tu"><img 
                    src="https://p0.pipi.cn/mmdb/54ecde8d71f71f16bd395b79f9ead85379ce7.jpg?imageView2/1/w/464/h/644"
                /></div>

                {/* 电影相关信息 */}
                <div>
                    {/* 名称 */}
                    <div className="top-main-text">
                        <h1>年会不能停！</h1>
                        <div className="top-main-en">Johnny Keep Walking!</div>
                        <ul className="top-main-text-ul">
                            <li >
                                <a href="#" className="top-main-text-con">喜剧 </a>
                                <a href="#" className="top-main-text-pl"> 剧情</a>
                            </li>
                            <li className="top-main-text-time">中国大陆 / 117分钟</li>
                            <li className="top-main-text-com-tim">2023-12-29 12:00中国大陆上映</li>
                        </ul>
                    </div>
                    {/* 想看、评分、特惠购票 */}
                    <div className="top-main-wen">
                        <a href="#" className="top-main-wen-w"><div>♥ 想 看</div></a>
                        <a href="#" className="top-main-wen-p"><div>☆ 评 分</div></a>
                        <br/>
                        <a href="#" className="top-main-wen-t"><div>特惠购票</div></a>
                    </div>
                    {/* 猫眼口碑评分 */}
                    <div className="top-main-wor">
                        <p>猫眼口碑</p>
                        <div className="top-main-wor-shu">
                            <span className="top-main-wor-sco">9.6</span>
                            <div className="top-main-wor-right">
                                <div className="top-main-wor-star">⭐⭐⭐⭐⭐</div>
                                <span className="top-main-wor-people">  91869人评分</span>
                            </div>
                        </div>
                        <p className="top-main-wor-piao">累计票房</p>
                        <div className="top-main-wor-num">
                            <span style={{fontSize:'28px'}}>5.03</span>
                            <sppan>亿</sppan>
                        </div>
                    </div>
                </div>
            </div>

            {/* 中间内容 */}
            <div className="middle-main">
                {/* 中间内容靠左 */}
            <div className="left-main">
                
            </div>
            

            {/* 中间内容靠右 */}
            <div className="right-main">内容在里面</div>
            </div>

            {/* 底部版权内容 */}
            <div className="button-main">版权@runxhzxjc.com</div>
        </div>
        )
        }

 export default Onehome