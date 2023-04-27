import { useState } from 'react'
import '../styles/Footer.css'

export function Footer() {
	const [inputValue, setInputValue] = useState('')

	const handleBlur = () => {
		inputValue.includes('@') || alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
	}

	const handleChange = (e) => {
		setInputValue(e.target.value)
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input 
				type="text"
				placeholder='Entrez votre email'
				onBlur={handleBlur}
				onChange={(e) => handleChange(e)} />
		</footer>
	)
}


