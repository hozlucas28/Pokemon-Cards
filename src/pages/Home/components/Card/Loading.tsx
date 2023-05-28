import loadingImg from '../../../../static/card-image-loading.webp'

import styles from './Loading.module.css'

const Loading = () => {
	return (
		<article className={styles.container}>
			<header className={styles.header}>
				<h3></h3>
				<span></span>
			</header>
			<img
				className={styles.image}
				src={loadingImg}
			/>
			<footer className={styles.footer}>
				<ul>
					<li>
						<span></span>
						<span></span>
					</li>
					<li>
						<span></span>
						<span></span>
					</li>
					<li>
						<span></span>
						<span></span>
					</li>
					<li>
						<span></span>
						<span></span>
					</li>
				</ul>
			</footer>
		</article>
	)
}

export default Loading
