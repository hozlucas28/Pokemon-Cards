import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { BookmarkIcon, BookmarkSlashIcon } from '@heroicons/react/24/solid'

import { TEXTS } from '../../constants/TEXTS'

import { Pokemon } from '../../../../interfaces/Pokemon.interface'

import { getLocalStorage } from '../../../../utils/getLocalStorage'
import { setLocalStorage } from '../../../../utils/setLocalStorage'

import styles from './SavePokemonBtn.module.css'

type Props = {
	toggle: boolean
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	pokemon: Pokemon
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
	status: boolean
}

const SavePokemonBtn: React.FC<Props> = ({ toggle, setToggle, pokemon, setPokemon, status }) => {
	const savedCards = getLocalStorage<Array<Pokemon>>({ key: 'savedCards' })
	const hasSavedCards = Object.values(savedCards).length > 0

	const handleOnClick: React.MouseEventHandler = () => {
		toast.success(TEXTS.buttons.savePokemon.onClickNotification, {
			position: 'bottom-right',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'light',
		})

		setToggle(!toggle)
		setPokemon({ ...pokemon, loading: true })
		setLocalStorage({ key: 'savedCards', value: hasSavedCards ? [...savedCards, pokemon] : [pokemon] })
	}

	return (
		<>
			<button
				className={`${styles.btn} ${status ? styles.btnEnabled : styles.btnDisabled}`}
				name={TEXTS.buttons.savePokemon.alt}
				onClick={status ? handleOnClick : () => ''}
			>
				{status ? <BookmarkIcon /> : <BookmarkSlashIcon />}
			</button>
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
		</>
	)
}

export default SavePokemonBtn
