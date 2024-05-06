import axios from 'axios'

export const getAllUsers = ( {setUsers})=> {
    return axios.get('http://localhost:3001/users')
    .then((response)=> setUsers(response.data))
  }