
import { useNavigate } from 'react-router-dom'

import MyInput from '../../components/MyInput' 

import * as authService from '../../services/auth.service'

import './index.scss'

export default function LoginPage() {

    const navigate = useNavigate()

    let username = ''
    let password = ''

    function signIn() {
        authService.login(username, password).then (isLogged =>{
            if (isLogged){
                navigate('/home')
            } else {
                alert('Login ou senha inválido(s)')
            }       
        }).catch(error=> {
            console.error(error)
            alert('Login ou senha inválido(s)')
        })
    }


    return (

        <div className='login-page'>

            <header>
                Pagina de Acesso
            </header>

            <main>
                <MyInput id='username' label='Login' change={value => username= value} />
                <MyInput id='password' label='Senha' type='password' change={value => password= value} />

            </main>
            <footer>
                <button onClick={signIn}>Entrar</button>
            </footer>
            
        </div>
    )

  
}