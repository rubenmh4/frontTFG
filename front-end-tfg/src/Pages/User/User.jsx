import { useState } from "react";
import { useAuthStore } from "../../store/auth";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { uploadFile } from "../../firebase/config";
import "./User.css";

const fetchUserId = async (id) => {
  const res = await axios.get(`http://localhost:3001/users/${id}`);
  const { data } = res;
  return data;
};

const User = () => {
  const { id } = useParams();
  const { profile, admin, setProfile } = useAuthStore();
  const [ownUser, setOwnuser] = useState(false);
  const [image, setImage] = useState();
  const [render, setRender] = useState(false);
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    _id: "",
    username: "",
    email: "",
    name: "",
    firstName: "",
    position: "",
    level: "",
    isChat: "",
    imgUrl: "",
  });

  useEffect(() => {
    if (id === profile._id) {
      setOwnuser(true);
      setUser(profile);
      return;
    }

    fetchUserId(id)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSubmitImage = async () => {
    const url = await uploadFile(profile.username, image);
    const res = await axios.patch(`http://localhost:3001/users/${user._id}`, {
      imgUrl: url,
    });
    setUser({ ...user, imgUrl: url });
    setProfile({ ...profile, imgUrl: url });
  };
  //firebase cargar image

  return (
    <div className="container-page-user">
      <div className="header-user">
        <img src={`${user.imgUrl}`} alt="image of user" />
        <h2>{user.username}</h2>
        {ownUser && <button 
        className="button-user"
        onClick={()=>{setEdit(!edit)}}
        >Editar</button>}
      </div>
      {edit &&
      <div className="updateImage">
        <input
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          onChange={handleChange}
        />
        <button onClick={handleSubmitImage} type="submit">
          Guardar foto
        </button>
      </div>
      }
      <div className="data-info">
        <div className="data-owner">
          <p>
            <span>
              <strong>Nombre</strong>
            </span>
            <hr />
            {edit ? (
            <input 
            placeholder="Nombre"
            name="name"
            />
            
            ):(
            <span>{user.name}</span>
            ) }
          </p>
          <p>
            <span>
              <strong>Apellidos</strong>
            </span>
            <hr />
            {edit ? (
            <input 
            placeholder="Apellidos"
            name="firstName"
            />
            
            ):(
            <span>{user.firstName}</span>
            ) }
          </p>
          <p>
            <span>
              <strong>Email</strong>
            </span>
            <hr />
            {edit ? (
            <input 
            placeholder="Email"
            type="email"
            name="email"
            />
            
            ):(
            <span>{user.email}</span>
            ) }
          </p>
        </div>
        <div className="data-right">
          <p>
            <span>
              <strong>Posicion</strong>
            </span>
            <hr />
            {edit ? (
            <input 
            placeholder="Posición"
            name="position"
            />
            
            ):(
            <span>{user.position}</span>
            ) }
          </p>
          <p>
            <span>
              <strong>Nivel</strong>
            </span>
            <hr />
            {edit ? (
            <input 
            placeholder="Nivel"
            name="level"
            />
            
            ):(
            <span>{user.level}</span>
            ) }
          </p>
        </div>
      </div>
      {ownUser && <h1>hola</h1>}
      {admin && <h1>hola</h1>}
    </div>
  );
};

export default User;
