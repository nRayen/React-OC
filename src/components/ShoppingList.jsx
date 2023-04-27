import React from 'react'
import '../styles/shoppingList.css'
import { plantList } from '../data/plantList'
import { PlantItem } from './PlantItem'

const categories = []


plantList.forEach((plant) => {
    categories.includes(plant.category)? null : categories.push(plant.category)
})


export function ShoppingList() {
  return (
    <>
        <ul>
            {categories.map((cat) => {
                return <li key={cat}>{cat}</li>
            })}
        </ul>
        
        <ul className='.lmj-plant-list'>
            {plantList.map((plant) => {
                return (

                    <PlantItem 
                        name={plant.name}
                        id={plant.id}
                        light={plant.light}
                        water={plant.water}
                        cover={plant.cover}
                    />

                )
            })}
        </ul>
    </>
  )
}

