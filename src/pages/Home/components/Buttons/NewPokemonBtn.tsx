import { TEXTS } from '../../constants/TEXTS'

import { Pokemon } from '../../../../interfaces/Pokemon.interface'

import styles from './NewPokemonBtn.module.css'

type Props = {
	toggle: boolean
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	pokemon: Pokemon
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
	status: boolean
}

const NewPokemonBtn: React.FC<Props> = ({ toggle, setToggle, pokemon, setPokemon, status }) => {
	const handleOnClick: React.MouseEventHandler = () => {
		setToggle(!toggle)
		setPokemon({ ...pokemon, loading: true })
	}

	return (
		<button
			className={`${styles.btn} ${status ? styles.btnEnabled : styles.btnDisabled}`}
			aria-label={status ? TEXTS.buttons.newPokemon.enabled : TEXTS.buttons.newPokemon.disabled}
			onClick={status ? handleOnClick : () => ''}
		>
			{status ? TEXTS.buttons.newPokemon.enabled : TEXTS.buttons.newPokemon.disabled}
		</button>
	)
}

export default NewPokemonBtn
