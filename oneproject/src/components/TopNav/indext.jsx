import React  from "react";
import "./style.less"
import { NavLink } from "react-router-dom";

const TopNav=()=>{
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
               <p id="address">定位</p>

                <li>
                    {/* exact高亮 */}
                    
                    <NavLink exact to='/' id="homename" >
                        主页
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/shop' id="shopname">
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
export default TopNav