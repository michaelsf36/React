import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

function Navbar() {
    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function sair() {
        handleLogout()
        navigate('/')
    }


    return (
        <>
            <div className='w-full flex justify-center py-4
                           bg-indigo-900 text-white'>

                <div className="container flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>
                    <img src="https://i.imgur.com/ZZFAmzo.jpg" alt="Imagem de perfil" className="w-10 h-10 rounded-full object-cover" />

                    <p> Bem vindo !!</p>

                    <div className='flex gap-4'>
                        <Link to='/postagens' className='hover:underline'>Postagens</Link>
                        <Link to={"/temas"} className="hover:underline">Temas</Link>
                        <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
                         Perfil
                        <Link to='' onClick={sair} className="hover:underline"> Sair </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar