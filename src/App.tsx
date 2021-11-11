import Login from './components/login/Login'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/Register' element={<Login />} />
			<Route path='/ForgotPassword' element={<Login />} />
		</Routes>
	)
}

export default App
