import React from 'react'
import "./style.less"

export default function User() {


    return (
        <div >
            <p>登入页面</p>
            <Login />
        </div>
    )
}

// 登入框
function Login() {

    return (
        <div className="allloginone">
            <div className='loginone'>

                <div className='loginoneinto'>
                    <form id='loginform'>
                        <label className='username'>
                            账号：<input className='usernamek' />
                        </label><br /><br /><br />
                        <label className='usercode'>
                            密码：<input type='password' class='usercodek' />
                        </label><br />
                        <button type='submit' class='loginsumbit'>登  入</button>
                    </form>
                </div>
            </div>
        </div>
    )
}