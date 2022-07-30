import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { EntretenimientoCategorias } from './../../data/EntretenimientoData';

export const EntretenimientoScreen = () => {
    const [categorias, setCategorias] = useState(EntretenimientoCategorias)
    return (
        <>
            {
                categorias.map((categoria) => {
                    return (
                        <>
                            <Link className="Entretenimiento__Card__Menu" 
                                to={`/entretenimiento/${categoria.ent_categoria_titulotitulo}`}>
                                <p>{categoria.ent_categoria_titulo.toUpperCase()}: id {categoria.ent_categoria_id}</p>
                                <img src={categoria.ent_categoria_img} alt={categoria.ent_categoria_titulo} />
                                <img src={categoria.ent_categoria_background} alt={categoria.ent_categoria_titulo} />
                            </Link>
                        </>
                    )
                })
            }
        </>
    )
}
