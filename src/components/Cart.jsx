import React, { useState } from 'react'
import '../styles/cart.css'

export function Cart(props) {

  let cart = props.cart
  let updateCart = props.updateCart


    const [isOpen, setIsOpen] = useState(false)

    const handleOpening = () => {
      setIsOpen(!isOpen)
    }


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
                    <span>{amount}x {name} : {amount * price}€</span>
                    <div className="amount">
                      <button>+</button>
                      <span>{amount}</span>
                      <button>-</button>
                    </div>
                  </li>
                ))}
              </ul>

              <h3>Total : {cart.reduce((acc , item) => {
                return acc + (item.price * item.amount)
                },0)}€</h3>


              <button className='empty-cart' onClick={() => {updateCart([])}}>Vider le panier</button>
            </>

        )}

    </div>

  ) : (
    <button className='open-btn' onClick={handleOpening}>Ouvrir le panier</button>
  )
}
