import React from 'react'
import '../styles/banner.css'
import logo from '../assets/logo.png'

export function Banner () {
  const title = "La maison jungle"

  return (
    <div className="lmj-banner">
      <img src={logo} alt="Logo La Maison Jungle" className='lmj-logo'/>
      <h1 className='lmj-title'>{title.toUpperCase()}</h1>
    </div>
  )
}