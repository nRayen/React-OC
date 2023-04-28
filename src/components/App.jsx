import { useState } from "react";
import { Banner } from "./Banner";
import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { ShoppingList } from "./ShoppingList";

export function App() {

  const [cart, updateCart] = useState([])

  return (
    <>
      <Banner />
      <main>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </main>
      <Footer />
    </>
  )
}

