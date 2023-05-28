import { COMMON as TEXTS } from '../constants/texts/COMMON'

import pokeballImg from '../static/pokeball.webp'

import styles from './Pokeball.module.css'

const Pokeball = () => {
	return (
		<div className={styles.container}>
			<img
				src={pokeballImg}
				alt={TEXTS.pokeball.alt}
				title={TEXTS.pokeball.title}
			/>
		</div>
	)
}

export default Pokeball
