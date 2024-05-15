import  { useEffect, useState } from "react";
import { RenderVar } from "../../components/RenderVar/RenderVar";
import { ListUsers } from "../../components/ListUsers/ListUsers";
import axios from "axios";

export const Chat = () => {
  const [render, setRender] = useState(false);

  const [usersChat, setUsers] = useState([])

  const fetchGetUser = async ()=> {
     const res = await axios.get('http://localhost:3001/users')
    const users = res.data
    return {users}
 }
  

  useEffect(() => {
    fetchGetUser()
    .then(allUsers => {
      const {users} =allUsers
      setUsers(users)
    })
  }, [])
  
  return (
    <div>
      <RenderVar render={render} setRender={setRender} firstElement={'Chat'} secondElement={'Participantes'}/>

      <div>{render ? "" : <ListUsers mode={'chat'} users={usersChat}/>}</div>
    </div>
  );
};
