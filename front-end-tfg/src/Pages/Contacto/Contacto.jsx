import emailjs from '@emailjs/browser';
import { useRef } from 'react';

export const Contacto = () => {

const form = useRef()

const handleSubmit = (e)=> {
    e.preventDefault()
    emailjs.sendForm('service_ttdnl84','template_8k47xhe',form.current, {
        publicKey: 'F8-5YhO-SLbXP6iZZ'
    })
    .then( ()=> {
        console.log('SUCCES!')
    },
    (err)=> {
        console.log(err)
})

}


  return (
    <div className="contianer-contacto">
      <div className="container-contacto-card">
        <div className="form-contacto">
            <form ref={form} onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input type="text" id="name" name="name"/> <br />
                <label htmlFor="">Email</label>
                <input type="email" id="email" name="email"/><br />
                <label htmlFor="message">Mensaje</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                <button type='submit'>Enviar</button>
            </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};
