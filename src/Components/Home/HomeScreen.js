import React from 'react'
import { Routes, Link } from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <>
            <Link to="/turismo">Turismo</Link>
            <Link to="/gastronomia">Gastronomia</Link>
            <Link to="/entretenimiento">Entretenimiento</Link>
        </>
    )
}
