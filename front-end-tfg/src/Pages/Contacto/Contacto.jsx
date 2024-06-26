import emailjs from "@emailjs/browser";
import { useRef } from "react";
import "./Contacto.css";
import {toast,ToastContainer} from 'react-toastify';

export const Contacto = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_ttdnl84", "template_8k47xhe", form.current, {
        publicKey: "F8-5YhO-SLbXP6iZZ",
      })
      .then(
        () => {
          toast.success("Mensaje enviado con éxito", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
   <>
<div className="container-contacto-principal">
<h3>Contacto</h3>

<div className="container-contacto">
  <form className="form-contacto" ref={form} onSubmit={handleSubmit}>
    <label htmlFor="name">Nombre </label>
    <input type="text" id="name" name="name" placeholder="Nombre.."/>

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" placeholder="tuemail@gmail.com.."/>

    <label htmlFor="message">Mensaje</label>
    <textarea id="message" name="message" placeholder="¿Qué nos quieres comunicar?" ></textarea>

    <button className="submit-contacto" type="submit">Enviar </button>
  </form>
</div>
<ToastContainer/>
</div>

</>
  );
};
