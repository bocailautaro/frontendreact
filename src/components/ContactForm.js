import React from 'react';
import './ContactForm.css';

const ContactForm = (props) => {
  return (
      <div className="contact-form">
        <h1>CONTACTO</h1>
        <form action="" method="" className="form-container">
        <p>
          <label>Nombre</label>
          <input type="text" name="nombre" />
        </p>
        <p>
          <label>Email</label>
          <input type="text" name="email" />
        </p>
        <p>
          <label>Mensaje</label>
          <textarea name="mensaje"></textarea>
        </p>
        <p>
          <input type="submit" value="Enviar" id="button"/>
        </p>
        </form>
      </div>
  )
}

export default ContactForm;