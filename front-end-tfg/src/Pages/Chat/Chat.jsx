import  { useEffect, useState } from "react";
import { RenderVar } from "../../components/RenderVar/RenderVar";
import { ListUsers } from "../../components/ListUsers/ListUsers";
import axios from "axios";
import { ChatComponent } from "../../components/Chat/ChatComponent";

export const Chat = () => {
  const [render, setRender] = useState(true);

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
 
  //socket io


  return (
    <div>
      <RenderVar render={render} setRender={setRender} firstElement={'Chat'} secondElement={'Participantes'}/>

      <div>{render ? <ChatComponent /> : <ListUsers mode={'chat'} users={usersChat}/>}</div>
    </div>
  );
};
