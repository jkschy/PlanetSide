import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createTheme, ThemeProvider } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { BrowserRouter } from 'react-router-dom'

declare module '@material-ui/core' {
	interface Theme {
		status: {
			error: string
		}
	}
	// allow configuration using `createTheme`
	interface ThemeOptions {
		status?: {
			error?: string
		}
	}
}

const theme = createTheme({
	status: {
		error: red[500]
	}
})

ReactDOM.render(
	<BrowserRouter>
		<ThemeProvider theme={theme}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
