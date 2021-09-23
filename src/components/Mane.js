import { useState } from "react";
import { useParams } from "react-router";




export default function Mane() {
    const { userName } = useParams(); 
    const [characterName, setText] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        console.log(characterName);

        fetch("/api/users/info", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userName),
          })
            .then((res) => res.json())
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.error("에러 발생");
            });
    }

    return <div className="helloUser">
        <h2>
            { userName }님 안녕하세요
        </h2>
        <form onSubmit={onSubmit}>
            <input className="maneInput" placeholder="캐릭터 명을 입력하세요" value={characterName} onChange={onChange}/>
            <button className="maneBtn" >검색</button>
        </form>
    </div>
}