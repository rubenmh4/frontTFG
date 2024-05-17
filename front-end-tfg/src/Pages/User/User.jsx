import React, { useState } from "react";
import { useAuthStore } from "../../store/auth";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const fetchUserId = async (id) => {
  const res = await axios.get(`http://localhost:3001/users/${id}`);
  const { data } = res;
  return data;
};

const User = () => {
  const { id } = useParams();
  const { profile,admin } = useAuthStore();
  const [ownUser, setOwnuser] = useState(false);
  
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

  console.log(ownUser);
  return (
    <div className="container-page-user">
      <div className="header-user"></div>
      <div className="data-info">
        <div className="data-owner">
          <p>
            <span>
              <strong>Nombre-</strong>
            </span>
            <span>{user.name}</span>
          </p>
          <p>
            <span>
              <strong>Apellidos-</strong>
            </span>
            <span>{user.firstName}</span>
          </p>
          <p>
            <span>
              <strong>Email-</strong>
            </span>
            <span>{user.email}</span>
          </p>
        </div>
        <div className="data-right">
          <p>
            <span>
              <strong>Posicion-</strong>
            </span>
            <span>{user.position}</span>
          </p>
          <p>
            <span>
              <strong>Nivel-</strong>
            </span>
            <span>{user.level}</span>
          </p>
          <p>
            <span>
              <strong>Chat-</strong>
            </span>
            <span>{user.isChat ? "Sí" : "No"}</span>
          </p>
        </div>
      </div>
      {ownUser && <h1>hola</h1>}
      {admin && <h1>hola</h1>}
    </div>
  );
};

export default User;
