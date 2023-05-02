import React, { useEffect, useState } from 'react'
import '../styles/cart.css'

export function Cart({cart , updateCart, addItem}) {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpening = () => {
      setIsOpen(!isOpen)
    }

    let total = cart.reduce((acc , item) => {
      return acc + (item.price * item.amount)
      },0)

      useEffect(()=> {  // Changer titre page avec le prix à chaque changement du total
        document.title = total ?  `LMJ | ${total}€ d'achats` : "La Maison Jungle"
      },[total])

  return isOpen	? (

    <div className='lmj-cart'>

        <button className='close-btn' onClick={handleOpening}>❎</button>

        <h2>Panier</h2>

            {cart.length == 0 ? (
              <p>Votre panier est vide</p>


        ) : (  // Si le panier n'est pas vide

            <>
              <ul>
                {cart.map(({name , amount, price}) => (
                  <li key={name}>
                    <span>{name} : {amount * price}€</span>
                    <div className="amount">
                      <button onClick={()=>{addItem({name, price},"-")}}>-</button>
                      <span>{amount}</span>
                      <button onClick={()=>{addItem({name,price})}}>+</button>
                    </div>
                  </li>
                ))}
              </ul>

              <h3>Total : {total}€</h3>


              <button className='empty-cart' onClick={() => {updateCart([])}}>Vider le panier</button>
            </>

        )}

    </div>

  ) : (
    <button className='open-btn' onClick={handleOpening}>Ouvrir le panier</button>
  )
}
