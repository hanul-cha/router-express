import { Link } from "react-router-dom";
import { useState } from "react";
const User = require("../models/User");

export default function Login() {
    const [userInfo, setText] = useState({
        id:"",
        password:""
    });

    async function onSubmit(e) {
        e.preventDefault();
        setText(userInfo.id = e.target[0].value, userInfo.password = String(e.target[1].value))
        
        console.log(userInfo.id)
        console.log(userInfo.password)

        const user = new User(userInfo);
        const response = await user.login(); 

        console.log(response.success);

    }

    return (
        <>
            <div className="login-page">
                <div className="form">
                <form className="login-form" onSubmit={onSubmit}>
                    <input id="id" type="text" placeholder="아이디" required defaultValue={userInfo.id}/>
                    <input id="psword" type="password" placeholder="비밀번호" required defaultValue={userInfo.password}/>
                    <button id="button">login</button>
                    <p className="message">Not registered? <Link to="/user/register">Create an account</Link></p>
                </form>
                </div>
            </div>
        </>
    )
}