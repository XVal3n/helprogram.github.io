import React from 'react'
import Contacto from "../assets/top-lenguajes-programacion-2021.jpg";
import "../Styles/Contact.css"

function Contact() {
  return (
    <div className='contact'>
     <div className='leftSide' style={{ backgroundImage: `url(${Contacto})` }}> </div>
     <div className='rightSide'> 
     <h1> Contacto</h1>
     <form id="contact-form" method="POST">
          <label htmlFor="name">Nombre Completo</label>
          <input name="name" placeholder="Ingresar nombre completo..." type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder=" Ingresar email..." type="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea
            rows="6"
            placeholder="Ingresar mensaje..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar Mensaje</button>
        </form>
     </div>
    </div>
  )
}

export default Contact
