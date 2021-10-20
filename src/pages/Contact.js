import React from 'react';

const Contact = (props) => {
    return (
        <main className="holder">
            <div className="contacto">
                <h1>Contacto</h1>
                <form action="" method="" className="formulario">
                    <p>
                        <label>Tu Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Tu Email</label>
                        <input type="text" name="email"/>
                    </p>
                    <p>
                        <label>Tu Comentario</label>
                        <textarea type="mensaje" name="comentario"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"/></p>
                </form>
            </div>
            <div className="datos">
                <h2>+ Medios</h2>
                <p>
                    Podés comunicarte conmigo también a través de los siguientes medios de comunicación:
                </p>
                <ul>
                    <li>Teléfono: 3546522083</li>
                    <li>Email:bocailautaro@gmail.com</li>
                    <li>Facebook: bocailautaro</li>
                </ul>
            </div>
        </main>
    );
}

export default Contact;