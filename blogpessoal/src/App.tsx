import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import './App.css'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import DeletarTema from './components/tema/deletartema/DeletarTema'
import FormTema from './components/formtema/FormTema'
import Cadastro from './pages/cadastro/Cadastro'
import Login from './pages/login/Login'
import { AuthProvider } from './context/AuthContext'
import ListaTemas from './components/tema/listatemas/ListaTema'
import ListaPostagens from './components/postagem/listapostagens/ListaPostagens'
import FormPostagem from './components/postagem/formpostagem/FormPostagem'
import DeletarPostagem from './components/postagem/deletarpostagem/DeletarPostagem'
import Perfil from './pages/perfil/Perfil'

import 'react-toastify/dist/ReactToastify.css';


function App() {
	return (
		<>
			<AuthProvider>
				<ToastContainer />
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path="/" element={<Login />} />
						<Route path="/home" element={<Home />} />
						<Route path="/cadastro" element={<Cadastro />} />
						<Route path="/temas" element={<ListaTemas />} />
						<Route path="/cadastrartema" element={<FormTema />} />
						<Route path="/editartema/:id" element={<FormTema />} />
						<Route path="/deletartema/:id" element={<DeletarTema />} />
						<Route path="/postagens" element={<ListaPostagens />} />
						<Route path="/cadastrarpostagem" element={<FormPostagem />} />
						<Route path="/editarpostagem/:id" element={<FormPostagem />} />
						<Route path="/deletarpostagem/:id" element={<DeletarPostagem />} />
						<Route path="/perfil" element={<Perfil />} />


					</Routes>
					<Footer />
				</BrowserRouter>
			</AuthProvider>
		</>
	);
}

export default App