import React from 'react'
import '../styles/plantItem.css'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

export function PlantItem({ name , cover , id , light , water, price, cart, updateCart}) {

    const addItem = () => {
        let filteredCart = cart.filter(plant => plant.name != name)
        const addedPlant = cart.find(plant => plant.name == name)

        addedPlant ? (
            updateCart([...filteredCart, {...addedPlant, amount : addedPlant.amount + 1}])


            ) : ( // Si la plante est déja dans le panier


                updateCart([...cart, {
                    name,
                    price,
                    amount : 1
                }])
            )
    }

  return (
    <li className='lmj-plant-item'>
        <img src={cover} alt={`cover ${name}`} className='lmj-plant-item-cover' />
        {name}
        <div>
            <CareScale careType={'water'} scaleValue={water}/>
            <CareScale careType={'light'} scaleValue={light}/>
        </div>
        <button onClick={() => {addItem()}}></button>
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
                value = "modérement"
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

