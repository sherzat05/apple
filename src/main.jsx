import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Providers from './providers/index'

ReactDOM.createRoot(document.getElementById('root')).render(
	<Providers>
		<App />
	</Providers>
)
