import logo from './images/logo.png'; 
import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar= () => {
    return (
        <div className='navBar'> 
            <div className='logoContainer'>
                <Link to="/"><img src={logo} width={"50px"} alt="Logo de Rubishop"/></Link>
            </div>
            <div className='navList'>
                <NavLink to="/" className={({isActive}) => isActive ? "linkActivo" : "linkInactivo"}>Home</NavLink>
                <NavLink to="/categoria/originales" className={({isActive}) => isActive ? "linkActivo" : "linkInactivo"}>3×3×3</NavLink>
                <NavLink to="/categoria/shapemods" className={({isActive}) => isActive ? "linkActivo" : "linkInactivo"}>Shape Mods</NavLink>
                <NavLink to="/categoria/variedad" className={({isActive}) => isActive ? "linkActivo" : "linkInactivo"}>Variedad</NavLink>
            </div>
            <NavLink to="/cart" className={({isActive}) => isActive ? "linkActivo" : "linkInactivo"}><CartWidget /></NavLink>
        </div>
    )
};

export default NavBar;