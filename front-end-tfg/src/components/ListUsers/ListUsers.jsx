import axios from 'axios'
import './ListUsers.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { useAuthStore } from '../../store/auth';

export const ListUsers = ({users,mode}) => {

    const {admin} = useAuthStore()
    const deleteUser = async(id)=>{
        const res = await axios.delete(`http://localhost:3001/users/${id}`)
        console.log(res)
    }

    const handleDeleteUser = (e)=>{
        const {id} = e.target
        deleteUser(id)
    }
    const deleteUserChat = async (id)=>{
        const isChat = {isChat:false}
        const res = await axios.patch(`http://localhost:3001/users/${id}`,isChat)
        console.log(res)
    }

    const handleDeleteUserChat = (e)=> {
        const { id } = e.target

        console.log(e.target)
        deleteUserChat(id)
    }


    return (
        <div className='container-table'>
            <div className='background-table'>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Usuario</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Nivel</th>
                        <th scope="col">Posición</th>
                        {admin && <th scope="col">Acción</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const id = user._id
                        return(
                        <tr key={user._id}>
                            <td><img src={user.imgUrl} /></td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.level}</td>
                            <td>{user.position}</td>
                            {admin && 
                            <td>
                                {mode==='dashboard' && <button className='button-list' title='Eliminar usuario' id={id} onClick={handleDeleteUser}><FaRegTrashAlt id={id}/></button>}
                                {mode==='chat' &&<button className='button-list' title='Eliminar usuario del chat' id={id} onClick={handleDeleteUserChat}><FaRegTrashAlt id={id}/></button>}
                            </td>
                            }
                        </tr>
                    )})}
                </tbody>
            </table>

            </div>
        </div>
    )
}

