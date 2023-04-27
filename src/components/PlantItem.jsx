import React from 'react'
import '../styles/plantItem.css'
import sun from '../assets/sun.svg'
import water from '../assets/water.svg'

export function PlantItem({ name , cover , id , light , water}) {



  return (
    <li className='lmj-plant-item' key={id}>
        <img src={cover} alt={`cover ${name}`} className='lmj-plant-item-cover' />
        {name}
        <div>
            <CareScale careType={'water'} scaleValue={water}/>
            <CareScale careType={'light'} scaleValue={light}/>
        </div>
    </li>
  )
}




function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? sun : water

    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}><img src={scaleType} /></span> : null
            )}
        </div>
    )
}

