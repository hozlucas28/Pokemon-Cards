import { ERRORS } from '../constants/ERRORS'

import { Pokemon } from '../interfaces/Pokemon.interface'

const getUrl = (num: number): string => `https://pokeapi.co/api/v2/pokemon?offset=${num}&limit=1`

type Parameters = {
	setPokemon: (pokemon: Pokemon) => void
	savedPokemon: Array<Pokemon>
}

export async function getRndPokemon({ setPokemon, savedPokemon }: Parameters) {
	const URL: string = getUrl(Math.floor(Math.random() * 1280))

	try {
		const response = await fetch(URL)
		const { results } = await response.json()

		const pokemonResponse = await fetch(results[0].url)
		const { id, name, weight, height, base_experience, moves, sprites } = await pokemonResponse.json()

		const pokemon: Pokemon = {
			id,
			name,
			height,
			weight,
			experience: base_experience,
			moves: moves.length,
			image: sprites.front_default,
			loading: false,
		}

		const isAlreadySaved = savedPokemon.find((poke) => poke.id === id)
		isAlreadySaved ? getRndPokemon({ setPokemon, savedPokemon }) : null

		setPokemon(pokemon)
	} catch (error) {
		throw new Error(ERRORS.onGetRndPokemon.toLowerCase())
	}
}
