import { useState } from 'react'
import { ToastContainer } from 'react-toastify'

import { BookmarkSlashIcon } from '@heroicons/react/24/solid'

import { TEXTS } from '../constants/TEXTS'

import { Pokemon } from '../../../interfaces/Pokemon.interface'

import { getLocalStorage } from '../../../utils/getLocalStorage'

import styles from './SavedCards.module.css'

import Card from './Card'

const SavedCards = () => {
	const savedCards = getLocalStorage<Array<Pokemon>>({ key: 'savedCards' })
	const [cards, setCards] = useState<Array<Pokemon>>(savedCards)

	const hasCards = Object.values(cards).length > 0

	return (
		<div className={styles.container}>
			{hasCards ? (
				cards.map((pokemon) => (
					<Card
						key={pokemon.id}
						setCards={setCards}
						{...pokemon}
					/>
				))
			) : (
				<div className={styles.noSavedCards}>
					<h3>{TEXTS.noSavedCards.title}</h3>
					<div>
						<BookmarkSlashIcon />
					</div>
				</div>
			)}
			<ToastContainer
				position='bottom-right'
				autoClose={2000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable={false}
				theme='light'
			/>
		</div>
	)
}

export default SavedCards
