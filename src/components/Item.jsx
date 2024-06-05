import React from 'react'
import { Link } from 'react-router-dom';
import image1 from "../images/Espejo.png";
import image2 from "../images/Edredon.png";
import image3 from "../images/Recibidor.png";
import image4 from "../images/Kala.png";



export const Item = ({producto}) => {

    const images = {
        1: image1,
        2: image2,
        3: image3,
        4: image4
    };

    if (!producto) {
        return null;
    }

    const { id, nombre, clasificacion } = producto;

    return (
        <div className="producto">
            <img src={images[id]} alt={`Imagen de ${nombre}`} />
            <div className='producto-descripcion'>
                <h2>{nombre}</h2>
                <p>Categoria: {clasificacion}</p>
                <Link to={`/item/${id}`}>Mas información sobre este producto</Link>
            </div>
        </div>
    )
}