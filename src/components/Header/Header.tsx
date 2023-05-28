import { COMMON as TEXTS } from '../../constants/texts/COMMON'

import styles from './Header.module.css'

const Header = () => {
	return (
		<header className={styles.container}>
			<h1 className={styles.title}>{TEXTS.header.title}</h1>
			<h2 className={styles.subtitle}>{TEXTS.header.subTitle}</h2>
		</header>
	)
}

export default Header
