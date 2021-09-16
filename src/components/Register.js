import { Link } from "react-router-dom";

export default function register() {
    return (
        <>
            <div className="login-page">
                <div className="form">
                <form className="login-form">
                    <input id="id" type="text" placeholder="아이디" required/>
                    <input id="name" type="text" placeholder="이름" required/>
                    <input id="psword" type="password" placeholder="비밀번호" required/>
                    <input id="confirm-psword" type="password" placeholder="비밀번호 확인" required/>
                    <button id="button">SIGN UP</button>
                    <p className="message">Already registered? <Link to="/user/login">login</Link></p>
                </form>
                </div>
            </div>
        </>
    )
}