import { useState, useEffect } from "react";
import { useAuthStore } from "../../store/auth";
import { useParams } from "react-router-dom";
import axios from "axios";
import { uploadFile } from "../../firebase/config";
import "./User.css";
import { toast, ToastContainer } from "react-toastify";

const fetchUserId = async (id) => {
  const res = await axios.get(`http://localhost:3001/users/${id}`);
  const { data } = res;
  return data;
};

const fetchBookings = async (id) => {
  const res = await axios.get(`http://localhost:3001/booking/${id}`);
  const { data } = res;
  return data;
};
function compararFechas(fechaComparar) {
  const hoy = new Date();
  const otraFecha = new Date(fechaComparar);
  
  // Reseteamos las horas, minutos, segundos y milisegundos para comparar solo el día
  hoy.setHours(0, 0, 0, 0);
  otraFecha.setHours(0, 0, 0, 0);

  return hoy.getTime() === otraFecha.getTime() ? true : false;
}
const deleteBDBooking = async (id)=>{
    const res = await axios.delete(`http://localhost:3001/booking/${id}`)
    const {data} = res
    console.log(data)
  }

const User = () => {
  const { id } = useParams();
  const { profile, setProfile } = useAuthStore();
  const [ownUser, setOwnuser] = useState(false);
  const [image, setImage] = useState();
  const [edit, setEdit] = useState(false);
  const [booking, setBooking] = useState([]);

  const [user, setUser] = useState({
    _id: "",
    username: "",
    email: "",
    name: "",
    firstName: "",
    position: "",
    level: "",
    imgUrl: "",
  });

  useEffect(() => {
    if (id == profile._id) {
      setOwnuser(true);
      setUser({ ...user, profile });
    }

    fetchUserId(id)
      .then((data) => {
        setUser(data);
      })
      .catch((err) => {
        throw new Error(err);
      });

    fetchBookings(profile._id)
      .then((data) => {
        setBooking(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [id, profile]);

  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUser({ ...user, [name]: value });
  };
  const handleSaveData = async () => {
    const userModified = {
      username: user.username,
      name: user.name,
      firstName: user.firstName,
      level: user.level,
      position: user.position,
      email: user.email,
    };
    const res = await axios.patch(
      `http://localhost:3001/users/${user._id}`,
      userModified
    );
    console.log(res);
    setProfile({ ...profile, ...user });
    toast.success("Datos guardados correctamente", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const deleteBooking = (id)=>{
      deleteBDBooking(id)
      const bookingFiltered = booking.filter(bookin => bookin._id != id)
      setBooking(bookingFiltered)
  }

  const handleSubmitImage = async () => {
    const url = await uploadFile(profile.username, image);
    const res = await axios.patch(`http://localhost:3001/users/${user._id}`, {
      imgUrl: url,
    });
    setUser({ ...user, imgUrl: url });
    setProfile({ ...profile, imgUrl: url });
    toast.success("Imagen guardada correctamente", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  function convertirHora(valor) {
    return (typeof valor === 'number' && !Number.isInteger(valor) && valor.toString().endsWith('.3')) 
        ? `${Math.floor(valor)}:30` 
        : valor;
}

  return (
    <div className="container-page-user">
      <div className="row1">
        <div className="edit">
          <div className="header-user">
            <img src={user.imgUrl} alt="User" />
            {edit ? (
              <input
                placeholder="Username"
                name="username"
                value={user.username}
                onChange={handleChangeInput}
              />
            ) : (
              <h2>{user.username}</h2>
            )}
            {ownUser && (
              <button
                className="button-user"
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                Editar
              </button>
            )}
          </div>
          {edit && (
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
          )}
        </div>
        <div className="data-info">
          <div className="data-owner">
            <p>
              <span className="span-bold">Nombre</span>
              <hr />
              {edit ? (
                <input
                  placeholder="Nombre"
                  name="name"
                  value={user.name}
                  onChange={handleChangeInput}
                />
              ) : (
                <span>{user.name}</span>
              )}
            </p>
            <p>
              <span className="span-bold">Apellidos</span>
              <hr />
              {edit ? (
                <input
                  placeholder="Apellidos"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChangeInput}
                />
              ) : (
                <span>{user.firstName}</span>
              )}
            </p>
            <p>
              <span className="span-bold">Email</span>
              <hr />
              {edit ? (
                <input
                  placeholder="Email"
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChangeInput}
                />
              ) : (
                <span>{user.email}</span>
              )}
            </p>
          </div>
          <div className="data-right">
            <p>
              <span className="span-bold">Posición</span>
              <hr />
              {edit ? (
                <input
                  placeholder="Posición"
                  name="position"
                  value={user.position}
                  onChange={handleChangeInput}
                />
              ) : (
                <span>{user.position}</span>
              )}
            </p>
            <p>
              <span className="span-bold">Nivel</span>
              <hr />
              {edit ? (
                <input
                  placeholder="Nivel"
                  name="level"
                  value={user.level}
                  onChange={handleChangeInput}
                />
              ) : (
                <span>{user.level}</span>
              )}
            </p>
            {edit && (
              <button
                type="submit"
                className="button-user yellow"
                onClick={handleSaveData}
              >
                Guardar cambios
              </button>
            )}
          </div>
        </div>
      </div>

      {ownUser && (
        <div className="extra-info">
          <table>
            <thead>
              <tr>
                <th>Pista</th>
                <th>Hora</th>
                <th>Dia</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {booking.map((reserva) => {
                const dia = reserva.diaReserva.split('T')[0];
                return (
                  <tr key={reserva._id}>
                    <td>{reserva.pista}</td>
                    <td>{convertirHora(reserva.hora)}</td>
                    <td>{dia} </td>
                    <td>
                      <button disabled={compararFechas(dia)} onClick={()=>{deleteBooking(reserva._id)}}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default User;
