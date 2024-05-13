import { useState } from "react";
import { InputGeneric } from "../InputGenereic/InputGeneric";
import axios from "axios";
import './Register.css'

export const Register = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    firstName: "",
    level: "",
    position: "",
  });

  const fetchPostUser = async()=> {
     const res = await axios.post('http://localhost:3001/users/register',form)
     console.log(res)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPostUser()
    
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  console.log(form)
  return (
    <div className="container-register">
    
    <div className="container-register-form">
      <form onSubmit={handleSubmit} className="form-register">
        <div className="row-register">
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
        </div>
        <div className="row-register">
          <InputGeneric
            handleChange={handleChange}
            legend={"Email"}
            type={"email"}
            name={"email"}
          />
        </div>
        <div className="row-register">
          <InputGeneric
            legend={"Nombre"}
            type={"text"}
            name={"name"}
            handleChange={handleChange}
          />
          <InputGeneric
            legend={"Apellidos"}
            type={"text"}
            name={"firstName"}
            handleChange={handleChange}
          />
        </div>
        <div className="row-register">
          <InputGeneric
            legend={"Posicion de juego"}
            type={"text"}
            name={"position"}
            handleChange={handleChange}
          />
          <InputGeneric
            legend={"Nivel"}
            type={"text"}
            name={"level"}
            handleChange={handleChange}
          />
        </div>
        <button type="submit">Registarse</button>
      </form>
      </div>
    </div>
  );
};
