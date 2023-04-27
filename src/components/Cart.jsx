import React from 'react'
import '../styles/cart.css'

export function Cart() {

    const monstrera = 8
    const lierre = 10
    const bouquet = 15
    const total = monstrera + lierre + bouquet


  return (
    <div className='lmj-cart'>
        <h2>Votre panier</h2>
        <ul>
            <li>Monstrera : {monstrera}€</li>
            <li>Lierre : {lierre}€</li>
            <li>Bouquet de fleurs : {bouquet}€</li>
        </ul>
        <p>Total : {total}€</p>
    </div>
  )
}
