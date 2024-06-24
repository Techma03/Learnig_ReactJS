import React from "react";

export default function Post({ data,liker,supression }) {
  return (
    <div className={data.liker?"active":"post"}>
      <h2>{data.titre}</h2>
      <p>{data.description}</p>
      <div className="btn">
        <button onClick={()=> liker(data)}>            
            {data.liker ?"Déjà Liker":"Liker"}
            </button>
        <button className="delete" onClick={()=>supression(data.id)}>Effacer</button>
      </div>
    </div>
  );
}
