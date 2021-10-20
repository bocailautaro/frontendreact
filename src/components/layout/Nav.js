import React from 'react';

import { Link } from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">Sobre LB</Link></li>
                    <li><Link to="/Resources">Recursos</Link></li>
                    <li><Link to="/Contact">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;