import React from "react";
import './onehome.less'
import Buttonzu from '../../components/Buttonzu/index'

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
                                <a href="http://localhost:3000/#/onehome" className="top-main-text-con">喜剧 </a>
                                <a href="http://localhost:3000/#/onehome" className="top-main-text-pl"> 剧情</a>
                            </li>
                            <li className="top-main-text-time">中国大陆 / 117分钟</li>
                            <li className="top-main-text-com-tim">2023-12-29 12:00中国大陆上映</li>
                        </ul>
                    </div>
                    {/* 想看、评分、特惠购票 */}
                    <div className="top-main-wen">
                        <a href="http://localhost:3000/#/onehome" className="top-main-wen-w"><div>♥ 想 看</div></a>
                        <a href="http://localhost:3000/#/onehome" className="top-main-wen-p"><div>☆ 评 分</div></a>
                        <br />
                        <a href="http://localhost:3000/#/onehome" className="top-main-wen-t"><div>特惠购票</div></a>
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
                            <span style={{ fontSize: '28px' }}>5.03</span>
                            <span>亿</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 中间内容 */}
            <div className="middle-main">

                {/* 中间内容靠左 */}
                <div className="deleft-main">
                    {/* 电影 > 年会不能停！ */}
                    <div>
                        <a>电影 </a>
                        <span> &gt; </span>
                        <span> 年会不能停！</span>
                    </div>
                    {/* 介绍 演员人员 奖项 图集 */}
                    <div className="deleft-main-int">
                        <a href="http://localhost:3000/#/onehome"><div>介绍</div></a>
                        <a href="http://localhost:3000/#/onehome"><div>演员人员</div></a>
                        <a style={{color:'rgb(218, 218, 218)'}}><div>奖项</div></a>
                        <a href="http://localhost:3000/#/onehome"><div>图集</div></a>
                    </div>
                    <hr/>
                    {/* 介绍的内容 */}
                    <div className="deleft-main-int-con" >
                        {/* 剧情简介 */}
                        <div className="deleft-main-int-con-one">
                            <div className="deleft-main-int-con-one-value">剧情简介</div>
                            <div>
                                <p>
                                    口碑炸了，全国都已对齐颗粒度！开年爆笑国产喜剧，谁看谁笑疯！从头笑到尾，快乐不能停！钳工胡建林 (大鹏 饰)在集团裁员之际阴差阳错被调入总部，裹挟在“错调”事件中的人事经理马杰 (白客 饰) 为保饭碗被迫为其隐瞒四处周旋。从“工厂”到“大厂”，从“蓝领”变“金领”，胡建林因与大厂环境格格不入而笑料百出，也像一面“职场照妖镜”照出职场众生相......胡建林为何能在裁员之际一路升职加薪制霸大厂？马杰又能否在“错调”事件中全身而退？这场离谱的“错调”背后又隐藏着什么惊天大瓜……
                                </p>
                            </div>
                        </div>
                        {/* 演员人员 */}
                        <div className="deleft-main-int-con-two">
                            <div className="deleft-main-int-con-two-value">演员人员</div>
                            {/* 导演 */}
                            <div>
                                <div style={{"margin":"6px 0px"}}>导演</div>
                                <ul>
                                    <li>
                                        {/* 导演图片 */}
                                        <img src="https://p0.pipi.cn/basicdata/fb73862fc69f2a8ea306d620fb1f9beda0667.jpg?imageView2/1/w/128/h/170" />
                                        {/* 导演名字 */}
                                        <div>董润年</div>
                                    </li>
                                </ul>
                            </div>
                            {/* 演员 */}
                            <div className="deleft-main-int-con-two-act" >
                                <div style={{"margin":"6px 0px"}}>演员</div>
                                <ul>
                                    <li>
                                        <img src="https://p0.pipi.cn/basicdata/25bfd6d7537e7acf3e57e23b4b7a55905592c.jpg?imageView2/1/w/128/h/170"/>
                                        <div>大鹏</div>
                                        <div>饰：胡建林</div>
                                    </li>
                                    <li>
                                        <img src="https://p0.pipi.cn/basicdata/25bfd6d7537e7acf3e57e23b4b7a55905592c.jpg?imageView2/1/w/128/h/170"/>
                                        <div>大鹏</div>
                                        <div>饰：胡建林</div>
                                    </li>
                                    <li>
                                        <img src="https://p0.pipi.cn/basicdata/25bfd6d7537e7acf3e57e23b4b7a55905592c.jpg?imageView2/1/w/128/h/170"/>
                                        <div>大鹏</div>
                                        <div>饰：胡建林</div>
                                    </li>
                                    <li>
                                        <img src="https://p0.pipi.cn/basicdata/25bfd6d7537e7acf3e57e23b4b7a55905592c.jpg?imageView2/1/w/128/h/170"/>
                                        <div>大鹏</div>
                                        <div>饰：胡建林</div>
                                    </li>
                                </ul>
                            </div>
                        </div >
                        {/* 图集 */}
                        <div className="deleft-main-int-con-three">
                            <div>图集</div>
                            <img src="https://p0.pipi.cn/friday/1709606769068a4e346864b11b696d02.jpg?imageView2/1/w/465/h/258"/>
                        </div>
                        {/* 影片资料 */}
                        <div className="deleft-main-int-con-four">
                            <div>影片资料</div>
                            <div className="deleft-main-int-con-four-tet">
                                <div className="deleft-main-int-con-four-c">
                                    <div>出品发行</div>
                                    <div style={{"color":"#7f7f7f58"}}>北京嘉映春天影业有限公司</div>
                                </div>
                                <div className="deleft-main-int-con-four-j">
                                    <div>技术参数</div>
                                    <div style={{"color":"#7f7f7f58"}}>1小时57分钟</div>
                                </div>
                            </div>

                        </div>

                        {/* 票房 */}
                        <div className="deleft-main-int-con-five">
                            <div>票房</div>
                            <div className="deleft-main-int-con-five-all">
                                <div className="deleft">
                                    <div>1</div>
                                    <div>昨日排名</div>
                                </div>
                                <div className="deleft">
                                    <div>18580</div>
                                    <div>首周房票(万)</div>
                                </div>
                                <div className="deleft">
                                    <div>55736</div>
                                    <div>累计房票(万)</div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
                </div>


                {/* 中间内容靠右 */}
                <div className="deright-main">
                    <div className="deright-main-wen" >预告片</div>
                    <div className="deright-main-txt">
                        <ul>
                            <li>
                                <div className="deright-main-txt-all">
                                    {/* 图片 */}
                                    <div className="deright-main-txt-img">
                                        <a href="http://localhost:3000/#/onehome"><img src="https://p0.pipi.cn/friday/67a57f2d5310eeb18060751f976eb544.jpg?imageView2/1/w/120/h/68"/></a>
                                    </div>
                                    <div className="deright-main-txt-name">
                                        <div><a>电影《年会不...</a></div>
                                        <div>542.1万</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="deright-main-txt-all">
                                    {/* 图片 */}
                                    <div className="deright-main-txt-img">
                                        <a href="http://localhost:3000/#/onehome"><img src="https://p0.pipi.cn/friday/67a57f2d5310eeb18060751f976eb544.jpg?imageView2/1/w/120/h/68"/></a>
                                    </div>
                                    <div className="deright-main-txt-name">
                                        <div><a>电影《年会不...</a></div>
                                        <div>542.1万</div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="deright-main-txt-all">
                                    {/* 图片 */}
                                    <div className="deright-main-txt-img">
                                        <a href="http://localhost:3000/#/onehome"><img src="https://p0.pipi.cn/friday/67a57f2d5310eeb18060751f976eb544.jpg?imageView2/1/w/120/h/68"/></a>
                                    </div>
                                    <div className="deright-main-txt-name">
                                        <div><a>电影《年会不...</a></div>
                                        <div>542.1万</div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* 底部版权内容 */}
            <div className="debutton-main"><Buttonzu/></div>
        </div>
    )
}

export default Onehome