import React from 'react'
import '../styles/shoppingList.css'
import { plantList } from '../data/plantList'
import { PlantItem } from './PlantItem'

const categories = []


plantList.forEach((plant) => {
    categories.includes(plant.category)? null : categories.push(plant.category)
})


export function ShoppingList({cart, updateCart}) {

  return (
    <section>
        <ul className='lmj-category'>
            {categories.map((cat) => {
                return <li key={cat}>{cat}</li>
            })}
        </ul>
        
        <ul className='lmj-plant-list'>
            {plantList.map(({id, cover , name, water, light, price}) => {
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
                        />

                )
            })}
        </ul>
    </section>
  )
}

