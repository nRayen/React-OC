import React, { useState } from 'react'
import '../styles/cart.css'

export function Cart() {

    const [cart, updateCart] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const monstrera = 8

    const handleOpening = () => {
      setIsOpen(!isOpen)
    }


  return isOpen	? (
    <div className='lmj-cart'>
        <button className='close-btn' onClick={handleOpening}>❎</button>
        <h2>Panier</h2>
        <ul>
            <li>{cart}x Monstrera : {monstrera}€</li>
        </ul>
        <button onClick={() => {updateCart(cart + 1)}}></button>
        <p>Total : {monstrera * cart}€</p>
        <button className='empty-cart' onClick={() => {updateCart(0)}}>Vider le panier</button>
    </div>

  ) : (
    <button className='open-btn' onClick={handleOpening}>Ouvrir le panier</button>
  )
}
