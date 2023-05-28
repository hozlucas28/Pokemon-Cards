import { useEffect, useState } from 'react'

import { ROUTES } from '../../constants/ROUTES'
import { TEXTS } from './constants/TEXTS'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Pokeball from '../../components/Pokeball'
import Buttons from './components/Buttons/Buttons'
import Card from './components/Card/Card'

import { pokemon as pokemonMock } from '../../mocks/pokemon.mock'

import { Pokemon } from '../../interfaces/Pokemon.interface'

import { getRndPokemon } from '../../services/getRndPokemon'

import { getLocalStorage } from '../../utils/getLocalStorage'

import styles from './Home.module.css'

const Home = () => {
	const [toggle, setToggle] = useState(false)
	const [pokemon, setPokemon] = useState(pokemonMock)

	useEffect(() => {
		const savedCards = getLocalStorage<Array<Pokemon>>({ key: 'savedCards' })
		const hasCards = Object.values(savedCards).length > 0
		getRndPokemon({ setPokemon, savedPokemon: hasCards ? savedCards : [] })
	}, [toggle, setPokemon])

	return (
		<>
			<Header />
			<div>
				<Card {...pokemon} />
				<div className={styles.buttonsContainer}>
					<Buttons
						toggle={toggle}
						setToggle={setToggle}
						pokemon={pokemon}
						setPokemon={setPokemon}
						status={!pokemon.loading}
					/>
					<Navbar
						navBarStyle={styles.navBar}
						links={[
							{
								to: ROUTES.favorites.route,
								title: ROUTES.favorites.title,
								style: styles.navBarLink,
								text: TEXTS.navBar.savedCards,
							},
						]}
					/>
				</div>
			</div>
			<Pokeball />
			<Footer />
		</>
	)
}

export default Home
