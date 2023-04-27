import { Banner } from "./Banner";
import { Cart } from "./Cart";
import { Footer } from "./Footer";
import { ShoppingList } from "./ShoppingList";

export function App() {

  return (
    <>
      <Banner />
      <main>
        <Cart />
        <ShoppingList />
      </main>
      <Footer />
    </>
  )
}

