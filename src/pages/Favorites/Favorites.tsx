import { ROUTES } from '../../constants/ROUTES'
import { TEXTS } from './constants/TEXTS'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Pokeball from '../../components/Pokeball'
import SavedCards from './components/SavedCards'

import styles from './Favorites.module.css'

const Favorites = () => {
	return (
		<>
			<Header />
			<Navbar
				navBarStyle={styles.navBar}
				links={[
					{
						to: ROUTES.home.route,
						title: ROUTES.home.title,
						style: styles.navBarLink,
						text: TEXTS.navBar.home,
					},
				]}
			/>
			<SavedCards />
			<Pokeball />
			<Footer />
		</>
	)
}

export default Favorites
