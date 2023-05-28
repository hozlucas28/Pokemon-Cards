import { createBrowserRouter } from 'react-router-dom'

import Favorites from '../pages/Favorites/Favorites'
import Home from '../pages/Home/Home'

import { ROUTES } from '../constants/ROUTES'

export const appRoutes = createBrowserRouter([
	{
		path: ROUTES.home.route,
		element: <Home />,
	},
	{
		path: ROUTES.favorites.route,
		element: <Favorites />,
	},
])
