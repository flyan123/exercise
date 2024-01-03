import React, { useState }  from "react";
import "./style.less"
// 跳转路由
import { NavLink } from "react-router-dom";


const TopNav=()=>{
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
               {/* <p id="address">定位</p> */}
                <Location className="address"/>
                <li>
                    {/* exact高亮 */}
                    
                    <NavLink exact to='/' id="homename" >
                        主页
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/nowfil' id="shopname">
                        分类
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/user' id="username">
                        用户
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
function Location (){
    const [city,setCity]=useState(

    )
    // 点击定位：左显示省份，点击省份，出现城市
    return(
        <div>
    <p className="address" onChange>定位</p>
        <form>
            <select>
                <option>12</option>
                <option>1</option>
                <option>1</option>
            </select>
        </form>
        </div>

    )
}

export default TopNav