import React from 'react'

export default function Navbar({nbrLiker}) {
  return (
    <div className='entete'>
        <h3>Les post liker sont : {nbrLiker}</h3>
    </div>
  )
}

