import { useState } from "react";
import { InputGeneric } from "../InputGenereic/InputGeneric";
import axios from "axios";
import "./Login.css";
import {useAuthStore} from '../../store/auth'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
export const Login = () => {
  const {setAdmin} = useAuthStore()

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const setToken = useAuthStore(state => state.setToken)
  const setProfile = useAuthStore(state=>state.setProfile)
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const fetchPostLogin = async () => {
    const res = await axios.post("https://backtfg-inmi.onrender.com/users/login", form);
    setToken(res.data.jwt)
    fetchProfile()
  };

  const fetchProfile = async()=>{
   const username = form.username
    const res = await axios.get(`https://backtfg-inmi.onrender.com/users/username/${username}`)
    setProfile(res.data)
    if(res.data.username === 'admin'){
      setAdmin()
    }
    navigate('/')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPostLogin()
    .catch(()=> {
      toast.error("Usuario o contraseña incorrecta", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }) 

    
  };

  return (
    <div className="container-login">
      <div className="container-login-form">
        <form onSubmit={handleSubmit} className="form-login">
          <div className="row-login">
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
          <button type="submit" className="button-login">
            Iniciar sesión
          </button>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};
