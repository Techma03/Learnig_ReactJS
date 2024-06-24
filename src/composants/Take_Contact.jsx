import React from 'react'

export default function Take_Contact() {
  return (
    <div>
         <h1>Contactez-nous</h1>
        <form action="">
            <label htmlFor="nom">Nom</label>
            <input type="text" placeholder='votre nom' />
            <label htmlFor="Message">Votre message</label>
            <input type="text" placeholder='votre message' />
            <button>Envoyer</button>
        </form>
    </div>
  )
}
