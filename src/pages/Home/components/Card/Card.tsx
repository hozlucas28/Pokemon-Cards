import { TEXTS } from '../../constants/TEXTS'

import { Pokemon } from '../../../../interfaces/Pokemon.interface'

import unknownPokemonImg from '../../../../static/no-pokemon-preview.webp'

import styles from './Card.module.css'

import Loading from './Loading'

const Card: React.FC<Pokemon> = ({ id, name, image, moves, weight, height, loading, experience }) => {
	image ??= ''

	return !loading ? (
		<article className={styles.container}>
			<header className={styles.header}>
				<h3>{name}</h3>
				<span>{id}</span>
			</header>
			<img
				className={styles.image}
				src={image !== '' ? image : unknownPokemonImg}
				alt={image !== '' ? name + ' ' + TEXTS.card.image.alt.toLowerCase() : ''}
				title={image !== '' ? TEXTS.card.image.title : ''}
			/>
			<footer className={styles.footer}>
				<ul>
					<li>
						<span>{TEXTS.card.footer.experience}:</span>
						<span>{experience ?? '???'}</span>
					</li>
					<li>
						<span>{TEXTS.card.footer.moves}:</span>
						<span>{moves ?? '???'}</span>
					</li>
					<li>
						<span>{TEXTS.card.footer.height}:</span>
						<span>{height ?? '???'}</span>
					</li>
					<li>
						<span>{TEXTS.card.footer.weight}:</span>
						<span>{weight ?? '???'}</span>
					</li>
				</ul>
			</footer>
		</article>
	) : (
		<Loading />
	)
}

export default Card
