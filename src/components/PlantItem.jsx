import React from 'react'
import '../styles/plantItem.css'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

export function PlantItem({ name , cover , id , light , water, price, cart, updateCart, addItem}) {

  return (
    <li className='lmj-plant-item'>
        <img src={cover} alt={`cover ${name}`} className='lmj-plant-item-cover' />
        <span className="price">{price}€</span>
        {name}
        <div>
            <CareScale careType={'water'} scaleValue={water}/>
            <CareScale careType={'light'} scaleValue={light}/>
        </div>
        <button  onClick={()=> {addItem({name , price})}} >Ajouter</button>
    </li>
  )
}




function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? sun : water

    const handleClick = () => {
        let value = ""
        switch (scaleValue) {
            case 1:
                value = "peu"
                break;
            
            case 2:
                value = "une quantité modérée"
                break
            case 3:
                value = "beaucoup"
                break;
        }

        const type = careType === 'light' ? 'de lumière' : "d'arrosage"

        alert(`Cette plante requiert ${value} ${type}`)
    }   

    return (

        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()} onClick={() => handleClick()}><img src={scaleType} /></span> : null
            )}
        </div>
    )
}

