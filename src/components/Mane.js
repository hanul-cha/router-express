import { useState } from "react";
import { useParams } from "react-router";




export default function Mane() {
    const { userName } = useParams(); 
    const [characterName, setText] = useState("");
    const [characterInfo, setInfo] = useState(
        {
            name: "",
            level: "",
            style: "",
        }
    );

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        /* console.log(characterName); */

        
        fetch(`http://localhost:5000/api/users/info`, {
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({name : characterName}),
        })
        .then((res) => res.json())
        .then(res => {
            if(res.success.length === 0){ //없는 이름이면
                alert("삭제되었거나 없는 캐릭터이름입니다.")
            } else { //존재하는 이름이면
                setInfo(res.success[0]);
            }
            
        })
        .catch((err) => {
        console.error("캐릭터 검색중 에러 발생");
        });
        setText("");
    }

    

    return <div className="helloUser">
        <h2>
            { userName }님 안녕하세요
        </h2>
        <form onSubmit={onSubmit}>
            <input id="maneInput" placeholder="캐릭터 명을 입력하세요" value={characterName} onChange={onChange}/>
            <button id="maneBtn" >검색</button>
        </form>

        <h3>{characterInfo.name}</h3>
        <h3>{characterInfo.level}</h3>
        <h3>{characterInfo.style}</h3>
        
    </div>
}