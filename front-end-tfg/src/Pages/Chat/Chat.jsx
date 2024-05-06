import  { useEffect, useState } from "react";
import { RenderVar } from "../../components/RenderVar/RenderVar";
import { ListUsers } from "../../components/ListUsers/ListUsers";
import { getAllUsers } from "../../services/usuario";

export const Chat = () => {
  const [render, setRender] = useState(false);

  const [users, setUsers] = useState([])

  

  useEffect(() => {
    getAllUsers({setUsers})
  }, [])
  
  return (
    <div>
      <RenderVar render={render} setRender={setRender} firstElement={'Chat'} secondElement={'Participantes'}/>

      <div>{render ? "" : <ListUsers  users={users}/>}</div>
    </div>
  );
};
