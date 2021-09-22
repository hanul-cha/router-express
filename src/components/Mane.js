import { useState } from "react";
import { useParams } from "react-router";

export default function Mane() {
    const { userName } = useParams(); 



    return <div className="helloUser">
        <h2>
            { userName }님 안녕하세요
        </h2>
        
    </div>
}