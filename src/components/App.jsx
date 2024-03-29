import { useEffect, useState } from "react";
import { Banner } from "./Banner";
import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { ShoppingList } from "./ShoppingList";

export function App() {

  const savedCart = JSON.parse(localStorage.getItem('cart'))
  const [cart, updateCart] = useState(savedCart ? savedCart : []) // Si panier dans LocalStorage, le récupère ou initialise array vide


  useEffect(()=> {  // Ajouter le panier au local Storage a chaque changement du panier 
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])


  const addItem = (added, type = "+") => {
    let filteredCart = cart.filter(plant => plant.name != added.name)
    const addedPlant = cart.find(plant => plant.name == added.name)

    addedPlant ? ( // Si la plante est présente dans le panier

      addedPlant.amount += type === "+"? 1 : -1,

      addedPlant.amount === 0 || filteredCart.splice(cart.findIndex(plant => plant.name == added.name),0,addedPlant), // Re-Ajoute la plante à son index SI amount != 0

        updateCart([...filteredCart])

        ) : ( // Si n'est pas encore dans le panier

            updateCart([...cart, {
                name: added.name,
                price: added.price,
                amount : 1
            }])
        )
}

  return (
    
    <>
      <Banner />
      <main>
        <Cart cart={cart} updateCart={updateCart} addItem={(add, type)=>{addItem(add, type)}} />
        <ShoppingList cart={cart} updateCart={updateCart} addItem={(add)=>{addItem(add)}}/>
      </main>
      <Footer />
    </>
  )
}

