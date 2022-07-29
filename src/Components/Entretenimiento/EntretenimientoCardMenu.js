import React from 'react'
import { Link } from 'react-router-dom'
export const EntretenimientoCardMenu = ({ id, titulo, url_img, url_background }) => {
    
    return (
        <Link className="Entretenimiento__Card__Menu" to = {`/entretenimiento/${titulo}`}>
            <p>{titulo.toUpperCase()}: id {id}</p>
            <img src={url_img} alt={titulo}/>
            <img src={url_background} alt={titulo}/>
        </Link>

    )
}
