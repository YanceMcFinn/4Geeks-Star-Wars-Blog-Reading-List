import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import { Card } from "./card.jsx"

export const Characters = () => {
    const [characters, setCharacters] = useState([])
    
    // here I fetch my todos from the API
    useEffect = (() => {
        async function fetchPeople() {
            for (let i = 1; i < 6; i++){
                let res = await fetch(`https://www.swapi.tech/api/people/${i}/`)
                let data = await res.json();
                await setCharacters(characters.push(data.result))
            }
        };
        fetchPeople();
    }, [])
return (
    <div className="row">
        <button onClick={console.log({characters})}>I hate this project</button>
  </div>    
)}