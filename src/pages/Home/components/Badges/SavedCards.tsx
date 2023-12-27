import styles from './SavedCards.module.css'

type Props = {
	numberOfCards: number
}

const SavedCards: React.FC<Props> = ({ numberOfCards }) => {
	return <span className={`group-hover:opacity-0 ${styles.badge}`}>{numberOfCards}</span>
}

export default SavedCards
