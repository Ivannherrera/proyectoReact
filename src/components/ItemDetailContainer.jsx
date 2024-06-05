import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productos } from '../../data/Productos.json';
import image1 from "../images/Espejo.png";
import image2 from "../images/Edredon.png";
import image3 from "../images/Recibidor.png";
import image4 from "../images/Kala.png";


export const ItemDetailContainer = () => {

    const images = {
        1: image1,
        2: image2,
        3: image3,
        4: image4
    };

    let { itemId } = useParams();
    let [producto, setProducto] = useState([]);


    useEffect(() => {
        setProducto(productos.find((prod) => prod.id === parseInt(itemId)));
    })

    const { id, nombre, marca, clasificacion, detalle } = producto;

    return (
        <div className='contenedor-informacion-producto'>
            <img src={images[id]} className='producto-imagen' />

            <div className='producto-detalle'>
                {producto ? "" : "Cargando"}
                <h1>{marca}</h1>
                <h2>{nombre}</h2>
                <h3>Categoria: {clasificacion}</h3>
                <p>{detalle}</p>
                <Link to="/" >Volver</Link>
            </div>
        </div>
    )
}