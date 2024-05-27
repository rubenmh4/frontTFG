import { useState } from "react";
import { InputGeneric } from "../InputGenereic/InputGeneric";
import axios from "axios";
import "./Register.css";
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const Register = ({setRender}) => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    name: "",
    firstName: "",
    level: "",
    position: "",
  });
  const [repeatPassword, setRepeatPassword] = useState("");
  const [deploy, setDeploy] = useState(false);

  
  const fetchPostUser = async () => {
    const res = await axios.post("http://localhost:3001/users/register", form);
    console.log(res);
    
  };
  const changeRender = ()=>{
    toast.success('Registro realizado correctamente', {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    
    
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (repeatPassword !== form.password) {
      toast.error('Las contraseñas no coinciden', {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    } else {
      setDeploy(false);
    }
    fetchPostUser();
   
    
    setForm({ username: "",
    password: "",
    email: "",
    name: "",
    firstName: "",
    level: "",
    position: "",})
    
    
      
      changeRender()
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "repeatPassword") {
      setRepeatPassword(value);
      return;
    }
    setForm({
      ...form,
      [name]: value,
    });
  };

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
              required={true}
            />
          </div>
          <div className="row-register">
            <InputGeneric
              legend={"Contraseña"}
              type={"password"}
              name={"password"}
              handleChange={handleChange}
              required={true}
            />
            
            <InputGeneric
              legend={"Repetir contraseña"}
              type={"password"}
              name={"repeatPassword"}
              handleChange={handleChange}
              required={true}
              />
              {deploy && (
                <span className="span-password">
                  La contraseña debe coincidir
                </span>
              )}
          </div>
          <div className="row-register">
            <InputGeneric
              handleChange={handleChange}
              legend={"Email"}
              type={"email"}
              name={"email"}
              required={true}
            />
          </div>
          <div className="row-register">
            <InputGeneric
              legend={"Nombre"}
              type={"text"}
              name={"name"}
              required={true}
              handleChange={handleChange}
            />
            <InputGeneric
              legend={"Apellidos"}
              type={"text"}
              name={"firstName"}
              required={true}
              handleChange={handleChange}
            />
          </div>
          <div className="row-register">
            <InputGeneric
              legend={"Posicion de juego"}
              type={"text"}
              name={"position"}
              required={true}
              handleChange={handleChange}
            />
            <InputGeneric
              legend={"Nivel"}
              type={"text"}
              name={"level"}
              required={true}
              handleChange={handleChange}
            />
          </div>

          <button className="button-register" type="submit">
            Registarse
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};
