import { redirect } from 'react-router-dom'
import './ListUsers.css'

export const ListUsers = ({users}) => {

    const admin = false
    

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
                        {admin && <th scope="col">Acciones</th>}
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td><img src="" alt='img of user'/></td>
                            <td>{user.username}</td>
                            <td>{user.name}</td>
                            <td>{user.league}</td>
                            <td>{user.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            </div>
        </div>
    )
}

