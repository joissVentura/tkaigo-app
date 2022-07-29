import React, { useState } from 'react'
import { EntretenimientoCategorias } from './../../data/EntretenimientoData';
import { EntretenimientoCardMenu } from './EntretenimientoCardMenu';

export const EntretenimientoScreen = () => {
    const [categorias, setCategorias] = useState(EntretenimientoCategorias)
    return (
        <>
            {
                categorias.map((categoria)=>{
                    return(
                        <EntretenimientoCardMenu 
                            id ={categoria.ent_categoria_id}
                            titulo = {categoria.ent_categoria_titulo}
                            url_img = {categoria.ent_categoria_img}
                            url_background = {categoria.ent_categoria_background}
                        />
                    )
                })
            }
        </>
    )
}
