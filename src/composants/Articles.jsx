import React from 'react'
import { useParams } from 'react-router-dom'

export default function Articles() {
    const {id} = useParams();   
  return (
    <div>
        <h2>Articles id: {id}</h2>
    </div>
  )
}
