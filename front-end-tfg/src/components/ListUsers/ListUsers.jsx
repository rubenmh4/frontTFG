import './ListUsers.css'
import { useNavigate } from 'react-router-dom';

export const ListUsers = ({users}) => {
    const navigate = useNavigate()

   


    const handleNavigate  = (id) => {
        navigate(`/user/${id}`)
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
                    
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        const id = user._id
                        return(
                        <tr key={user._id} onClick={()=>{
                            handleNavigate(id)
                        }}>
                            <td><img src={user.imgUrl} /></td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.level}</td>
                            <td>{user.position}</td>
                            
                        </tr>
                    )})}
                </tbody>
            </table>

            </div>
        </div>
    )
}

