import { useState } from "react"
import { RenderVar } from "../../components/RenderVar/RenderVar"
import { Register } from "../../components/Register/Register"
import { Login } from "../../components/Login/Login"

export const LoginRegister = () => {
    const [render, setRender] = useState(true)

    return (
    <div>
    <RenderVar render={render} setRender={setRender} firstElement={'Iniciar Sesión'} secondElement={'Registarse'}/>

    <div>{render ? <Login/> : <Register setRender={setRender}/>}</div>
  </div>
  )
}
