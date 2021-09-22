import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import useFetch from "../hooks/useFetch";




const User = require("../models/User");

export default function Login() {
    
    const [userInfo, setText] = useState({
        id:"",
        password:""
    });

    const history = useHistory();

    const dbList = useFetch(`http://localhost:5000/api/db`);

    function onChangeId(e) {
        setText({
            ...userInfo,
            id:e.target.value
        })
    }
    function onChangePs(e) {
        setText({
            ...userInfo,
            password:e.target.value
        })
    }

    async function onSubmit(e) {
        e.preventDefault();
        
        console.log(userInfo.id)
        console.log(userInfo.password)

        const user = new User(userInfo, dbList);
        const response = await user.login(); 

        if(response.success) {
            const userName = response.name;
            alert("로그인 되었습니다.");
            history.push(`/user/${userName}`);
        } else {
            alert(response.msg);
        }
    }

    return (
        <>
            <div className="login-page">
                <div className="form">
                <form className="login-form" onSubmit={onSubmit}>
                    <input id="id" type="text" placeholder="아이디" required value={userInfo.id || ""} onChange={onChangeId}/>
                    <input id="psword" type="password" placeholder="비밀번호" required value={userInfo.password || ""} onChange={onChangePs}/>
                    <button id="button">login</button>
                    <p className="message">Not registered? <Link to="/user/register">Create an account</Link></p>
                </form>
                </div>
            </div>
        </>
    )
}