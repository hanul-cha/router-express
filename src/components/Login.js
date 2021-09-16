import { Link } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="login-page">
                <div className="form">
                <form className="login-form">
                    <input id="id" type="text" placeholder="아이디" required/>
                    <input id="psword" type="password" placeholder="비밀번호" required/>
                    <button id="button">login</button>
                    <p className="message">Not registered? <Link to="/user/register">Create an account</Link></p>
                </form>
                </div>
            </div>
        </>
    )
}