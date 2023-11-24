import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './components/app/app'

const root = document.getElementById('root')
ReactDOM.createRoot(root).render(
	<StrictMode>
		<App />
	</StrictMode>
)
