import { useEffect, useState } from "react";
import "./dashboard.css";
import { RenderVar } from "../RenderVar/RenderVar";
import axios from "axios";

const handleDeleteUserBd = async (id) => {
  const res = await axios.delete(`https://backtfg-inmi.onrender.com/users/${id}`);
  const { data } = res;
  console.log(data);
};

const handleDeleteBookingBd = async (id) => {
  const res = await axios.delete(`https://backtfg-inmi.onrender.com//${id}`);
  const { data } = res;
  console.log(data);
};
function convertirHora(valor) {
  return typeof valor === "number" &&
    !Number.isInteger(valor) &&
    valor.toString().endsWith(".3")
    ? `${Math.floor(valor)}:30`
    : valor;
}

export const Dashboard = () => {
  const [render, setRender] = useState(true);
  const [usersState, setUsers] = useState([]);
  const [bookingsState, setBooking] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (selectedDate) {
      const fetchReservas = async () => {
        try {
          const res = await axios.get(
            `https://backtfg-inmi.onrender.com/booking/date/${selectedDate}`
          );
          if (Array.isArray(res.data)) {
            setBooking(res.data);
          } else {
            setBooking([]);
          }
        } catch (error) {
          console.error("Error fetching reservas:", error);
          setBooking([]);
        }
      };

      fetchReservas();
    }
  }, [selectedDate]);

  useEffect(() => {
    const fetchUsers= async () => {
        try {
          const res = await axios.get(
            `https://backtfg-inmi.onrender.com/users/`
          );
          if (Array.isArray(res.data)) {
            setUsers(res.data);
          } else {
            setUsers([]);
          }
        } catch (error) {
          console.error("Error fetching reservas:", error);
          setUsers([]);
        }
      };

      fetchUsers()

}, [])
  
  const handleChange = (e) => {
    const {value } = e.target;
   
      setSelectedDate(value);
    }
  
  const handleDeleteUser = (id) => {
    handleDeleteUserBd(id);
    const usersFiltered = usersState.filter((user) => user._id != id);
    setUsers(usersFiltered);
  };
  const handleDeleteBooking = (id) => {
    handleDeleteBookingBd(id);
    const bookingFiltered = bookingsState.filter((bookin) => bookin._id != id);
    setBooking(bookingFiltered);
  };

  return (
    <div>
      <RenderVar
        render={render}
        setRender={setRender}
        firstElement={"Usuarios"}
        secondElement={"Reservas"}
      />

      <div>
        {render ? (
          <>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Image</th>
                  <th scope="col">Usuario</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Nivel</th>
                  <th scope="col">Posición</th>
                </tr>
              </thead>
              <tbody>
                {usersState.map((user) => {
                  return (
                    <tr key={user._id}>
                      <td>
                        <img src={user.imgUrl} />
                      </td>
                      <td>{user.username}</td>
                      <td>{user.name}</td>
                      <td>{user.level}</td>
                      <td>{user.position}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleDeleteUser(user._id);
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <form>
              <input
                type="date"
                name="diaReserva"
                id="diaReserva"
                onChange={handleChange}
              />
            </form>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th className="col">Pista</th>
                  <th className="col">Hora</th>
                  <th className="col">Acción</th>
                </tr>
              </thead>
              <tbody>
                {bookingsState.map((reserva) => {
                  return (
                    <tr key={reserva._id}>
                      <td>{reserva.pista}</td>
                      <td>{convertirHora(reserva.hora)}</td>
                      <td>
                        <button
                          onClick={() => {
                            handleDeleteBooking(reserva._id);
                          }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};
