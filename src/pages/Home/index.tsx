
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {removeLoggedUser}   from '../../services/auth.service'
import {userService}   from '../../services/user.service' 
import HeaderButton    from '../../components/HeaderButton'
import './style.scss' 
import { User } from '../../models/user'


export default function HomePage() {

    const navigate = useNavigate()
    const [users, setUsers] =React.useState<User[]>([])

    function logOut(){
        removeLoggedUser()
        navigate('/login')

    }

    function fetchUsers() {
        userService.getUsers()
            .then (list=> {setUsers(list)})
            .catch(error => {
                alert('Sessão expirada')
                navigate ('/login') 
            })
        } 
    
    React.useEffect(()=> {
        fetchUsers()  
    }, [])

    function update(id: number){
        navigate(`/user/${id} /edit`)

    }

    function remove(id: number ){
        userService.delete(id).then(isDeleted => {
            if (!isDeleted) alert ('Usuário não encontrado')
                fetchUsers()

        })
    } 

    function goToCreateUser (){
        navigate('/user/create')
    }

    return (
    <div className='page-home'>
        <header>
            <HeaderButton text='Sair' click={logOut}/>

            Usuários Cadastrados

            <HeaderButton text='Novo' click={goToCreateUser}/>


            
        </header>
        <main>
            Temos {users.length} usuários cadastrados!

            {users.map(user => {
                return (
                    <div key= {user.username} className='list-item'> 
                        <div> {user.name} </div>
                        <div> {user.username} </div>
                        <div> 
                            <button className='editButton' onClick={ () => update( user.id!) }> Editar</button>
                            <button className='delButton' onClick={ () => remove (user.id!)}> Deletar</button>
                            
                        </div>
                    </div>
                )
            })}


        </main>
    </div>

)


}