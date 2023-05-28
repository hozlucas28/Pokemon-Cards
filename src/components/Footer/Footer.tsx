import { COMMON as LINKS } from '../../constants/links/COMMON'
import { COMMON as TEXTS } from '../../constants/texts/COMMON'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.container}>
			<div>
				<p>{TEXTS.footer.copyright}</p>
			</div>
			<div>
				<a
					className={styles.anchor}
					href={LINKS.repository}
					target='_blank'
					rel='noreferrer'
				>
					{TEXTS.footer.sourceCode}
				</a>
			</div>
		</footer>
	)
}

export default Footer
