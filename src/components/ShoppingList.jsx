import React, { useState } from 'react'
import '../styles/shoppingList.css'
import { plantList } from '../data/plantList'
import { PlantItem } from './PlantItem'
import { Categories } from './Categories'




export function ShoppingList({cart, updateCart, addItem}) {

  const [filter, setFilter] = useState("all")
  let shownPlants =  filter == "all" ? plantList : plantList.filter((plant) => plant.category == filter)

  return (
    <section>
        <Categories setFilter={setFilter} />
        
        <ul className='lmj-plant-list'>
            {shownPlants.map(({id, cover , name, water, light, price}) => {
                return (
                        <PlantItem 
                            key={id}
                            name={name}
                            light={light}
                            water={water}
                            cover={cover}
                            price={price}

                            cart={cart}
                            updateCart={updateCart}
                            addItem={(add)=>{addItem(add)}}
                        />

                )
            })}
        </ul>
    </section>
  )
}

