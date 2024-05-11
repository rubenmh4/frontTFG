import { useState } from "react";
import { InputGeneric } from "../InputGenereic/InputGeneric"
import axios from "axios";

export const Login = () => {
const [form, setForm] = useState({
  username:'',
  password:''
})

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form)
  const fetchPostLogin = async ()=> {
      const res = await axios.post('http://localhost:3001/users/login',form)
      console.log(res)  
  }

  const handleSubmit = (e)=> {
      e.preventDefault()
       fetchPostLogin()
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <InputGeneric
            legend={"Nombre de usuario"}
            type={"text"}
            name={"username"}
            handleChange={handleChange}
          />
          <InputGeneric
            legend={"Contraseña"}
            type={"password"}
            name={"password"}
            handleChange={handleChange}
          />
          <button type="submit">Iniciar sesión</button>
        </form>
    </div>
  )
}
