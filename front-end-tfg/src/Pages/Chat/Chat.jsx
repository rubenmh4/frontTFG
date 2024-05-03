import React, { useState } from "react";
import { RenderVar } from "../../components/RenderVar/RenderVar";
import { ListUsers } from "../../components/ListUsers/ListUsers";

export const Chat = () => {
  const [render, setRender] = useState(false);

  return (
    <div>
      <RenderVar render={render} setRender={setRender} firstElement={'Chat'} secondElement={'Participantes'}/>

      <div>{render ? "" : <ListUsers/>}</div>
    </div>
  );
};
