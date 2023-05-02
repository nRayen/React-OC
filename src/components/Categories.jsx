import React from 'react'
import { plantList } from '../data/plantList'
import "../styles/categories.css";
import { toCapitalize } from '../Functions/toCapitalize';

export const Categories = ({setFilter}) => {
    const categories = []

    plantList.forEach((plant) => {
        categories.includes(plant.category)? null : categories.push(plant.category)
    })

    const handleSelect = (e) => {
      setFilter(e.target.value)
    }


  return (
    <select name="categories" id="categories" onChange={handleSelect}>
        <option value="all">Tout</option>
        {categories.map((cat)=>{
            return <option key={cat} value={cat}>{toCapitalize(cat)}</option>
        })}
    </select>
  )
}
