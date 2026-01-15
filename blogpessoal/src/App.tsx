import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'

function App() {
	return (
		<>
		<BrowserRouter>
			<Navbar /> 
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/home" element={<Home />} />
				<Route path="/cadastro" element={<Cadastro />} />
				</Routes>
			<Footer />
		</BrowserRouter>
		</>
	);
}

export default App