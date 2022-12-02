import React from "react";

export default function Card({name, img, desc}) {
    return (
        
        <div className="movie_card">
        <img src={img} />
        <h3>{name}</h3>
        <p>{desc}</p>
        <button className="btn btn-success"> Play it 👆</button>
        
        </div>
        
    )
}