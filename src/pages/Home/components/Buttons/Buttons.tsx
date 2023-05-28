import React from 'react'

import { Pokemon } from '../../../../interfaces/Pokemon.interface'

import NewPokemonBtn from './NewPokemonBtn'
import SavePokemonBtn from './SavePokemonBtn'

type Props = {
	toggle: boolean
	setToggle: React.Dispatch<React.SetStateAction<boolean>>
	pokemon: Pokemon
	setPokemon: React.Dispatch<React.SetStateAction<Pokemon>>
	status: boolean
}

const Buttons: React.FC<Props> = ({ toggle, setToggle, pokemon, setPokemon, status }) => {
	return (
		<div>
			<NewPokemonBtn
				toggle={toggle}
				setToggle={setToggle}
				pokemon={pokemon}
				setPokemon={setPokemon}
				status={status}
			/>
			<SavePokemonBtn
				toggle={toggle}
				setToggle={setToggle}
				pokemon={pokemon}
				setPokemon={setPokemon}
				status={status}
			/>
		</div>
	)
}

export default Buttons
