import React, {useState} from "react";
export default function Count(props) {
    const [compteur, setCompteur] = useState(0);
    const incremment = () =>{
        setCompteur(compteur + 1);
    }
    const desincremment = () =>{
        setCompteur(compteur - 1);
    }
  return (
    <div className="compteur">   
        <button  onClick={incremment}>+</button>
        <p 
        className={compteur < 0 && "erreur"}
        >
        {compteur}</p>
        <button onClick={desincremment}>-</button>
    </div>
  )
}
