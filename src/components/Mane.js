import { useState } from "react";
import { useParams } from "react-router";
const parsing = require("../test");


export default function Mane() {
    const { userName } = useParams(); 

    function onSubmit(e){
        e.preventDefault();


    }

    return <div className="helloUser">
        <h2>
            { userName }님 안녕하세요
        </h2>
        <form onSubmit={onSubmit}>
            <input className="maneInput" placeholder="캐릭터 명을 입력하세요" />
            <button className="maneBtn" >검색</button>
        </form>
    </div>
}