
import { Link } from "react-router-dom";

export default function Header() {

    return <div className="header">
        <h1>
            <Link to="/user/login">로그인</Link><br />
            <Link to="/user/register">회원가입</Link>
        </h1>
        
    </div>
}