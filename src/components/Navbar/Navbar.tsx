import { Link } from 'react-router-dom'

import { Link as LinkInterface } from '../../interfaces/Link.interface'

type Props = {
	navBarStyle: string
	links: Array<LinkInterface>
}

const Navbar: React.FC<Props> = ({ navBarStyle, links }) => {
	return (
		<nav className={navBarStyle}>
			{links.map((link) => (
				<Link
					key={link.to}
					className={`group ${link.style}`}
					to={link.to}
					title={link.title}
				>
					{link.text}
					{link.children}
				</Link>
			))}
		</nav>
	)
}

export default Navbar
