import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
    const [userName, stateBoolen] = useState("로그인이 필요합니다.");

    return <div className="header">
        <h1>
            <Link to="/user/login">로그인</Link><br />
            <Link to="/user/register">회원가입</Link>
        </h1>
        
    </div>
}