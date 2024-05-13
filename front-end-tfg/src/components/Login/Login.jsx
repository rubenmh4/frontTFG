import { useState } from "react";
import { InputGeneric } from "../InputGenereic/InputGeneric";
import axios from "axios";
import "./Login.css";
import {useAuthStore} from '../../store/auth'
import {useNavigate} from 'react-router-dom'
export const Login = () => {
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
  console.log(form);
  const fetchPostLogin = async () => {
    const res = await axios.post("http://localhost:3001/users/login", form);
    setToken(res.data.jwt)
    fetchProfile()
  };

  const fetchProfile = async()=>{
   const username = form.username
   console.log(username)
    const res = await axios.get(`http://localhost:3001/users/${username}`)
    setProfile(res.data)
    navigate('/')
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchPostLogin();
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
    </div>
  );
};
