import React from 'react'
import { Carrito } from './Carrito'
import logo from '../images/logo.png'

export const NavBar = () => {
return (
<header className='header'>
    <a href='./index.html'><img className='logo' src={logo} alt="Logo de marca" /></a>
<nav className='menu'>
    <ul className='nav-menu'>
        <li><a className='nav-link' href='./index.html'></a>Inicio</li>
        <li><a className='nav-link' href='#'></a>Muebles</li>
        <li><a className='nav-link' href='#'></a>Objetos Deco</li>
        <li><a className='nav-link' href='#'></a>Textiles</li>
    </ul>
</nav>
<Carrito/>
</header>
)
}
