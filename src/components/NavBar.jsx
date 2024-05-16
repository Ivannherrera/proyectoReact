import React from 'react'
import { Carrito } from './Carrito'
import logo from '../images/logo.png'

export const NavBar = () => {
return (
<header className='header'>
    <a href='./index.html'><img className='logo' src={logo} alt="Logo de marca" /></a>
<nav className='menu'>
    <ul className='lista'>
        <li><a className='listalink' href='./index.html'></a>Inicio</li>
        <li><a className='listalink' href='#'></a>Muebles</li>
        <li><a className='listalink' href='#'></a>Objetos Deco</li>
        <li><a className='listalink' href='#'></a>Textiles</li>
    </ul>
</nav>
<Carrito/>
</header>
)
}
