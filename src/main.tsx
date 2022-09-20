import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { TodoContextProvider } from './Components/Context/TodoContext'
import GlobalStyle from './Styles/GlobalStyle'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	// <React.StrictMode>
	<TodoContextProvider>
		<GlobalStyle />
		<App />
	</TodoContextProvider>
	// </React.StrictMode>
)
