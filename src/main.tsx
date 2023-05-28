import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { appRoutes } from './routes/appRoutes.tsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={appRoutes} />)
