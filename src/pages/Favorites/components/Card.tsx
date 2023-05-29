import { toast } from 'react-toastify'

import { BookmarkSlashIcon } from '@heroicons/react/24/solid'

import { TEXTS } from '../constants/TEXTS'

import { Pokemon } from '../../../interfaces/Pokemon.interface'

import { getLocalStorage } from '../../../utils/getLocalStorage'
import { setLocalStorage } from '../../../utils/setLocalStorage'

import unknownPokemon from '../../../static/no-pokemon-preview.webp'

import styles from './Card.module.css'

interface Props extends Pokemon {
	setCards: React.Dispatch<React.SetStateAction<Pokemon[]>>
}

const Card: React.FC<Props> = ({ id, name, image, moves, weight, height, experience, setCards }) => {
	const handleOnClick: React.MouseEventHandler = () => {
		toast.error(TEXTS.savedCards.card.deleteCard.onClickNotification, {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'light',
		})

		const savedCards = getLocalStorage<Array<Pokemon>>({ key: 'savedCards' })
		const newSavedCards = savedCards.filter((card) => card.id !== id)
		setLocalStorage({ key: 'savedCards', value: newSavedCards })
		setCards(newSavedCards)
	}

	image ??= ''

	return (
		<article className={styles.container}>
			<header className={styles.header}>
				<h3>{name}</h3>
				<span>{id}</span>
			</header>
			<img
				className={styles.image}
				src={image !== '' ? image : unknownPokemon}
				alt={image !== '' ? name + ' ' + TEXTS.savedCards.card.image.alt.toLowerCase() : ''}
				title={image !== '' ? TEXTS.savedCards.card.image.title : ''}
			/>
			<footer className={styles.footer}>
				<ul>
					<li>
						<span>{TEXTS.savedCards.card.footer.experience}:</span>
						<span>{experience ?? '???'}</span>
					</li>
					<li>
						<span>{TEXTS.savedCards.card.footer.moves}:</span>
						<span>{moves ?? '???'}</span>
					</li>
					<li>
						<span>{TEXTS.savedCards.card.footer.height}:</span>
						<span>{height ?? '???'}</span>
					</li>
					<li>
						<span>{TEXTS.savedCards.card.footer.weight}:</span>
						<span>{weight ?? '???'}</span>
					</li>
				</ul>
			</footer>
			<button
				className={styles.deleteBtn}
				name={TEXTS.savedCards.card.deleteCard.alt}
				aria-label={TEXTS.savedCards.card.deleteCard.alt}
				onClick={handleOnClick}
			>
				<BookmarkSlashIcon />
			</button>
		</article>
	)
}

export default Card
