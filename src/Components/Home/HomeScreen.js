import React from 'react'
import {Link} from 'react-router-dom';

export const HomeScreen = () => {
    return (
        <>
            <Link to="/turismo">
                <div class="tk_section_card text-center">
                    <div>
                        <img src={`img/categorias/turismo.png`} 
                        className="tk_cat_bg" alt=''/>
                    </div>
                    <div class="bg_dark"></div>
                    <div class="tk_card_info">
                        <div>
                            <img src="img/categorias/turismo.svg" alt="" />
                                <h5>Turismo</h5>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/gastronomia">
                <div class="tk_section_card text-center">
                    <div>
                        <img src={`img/categorias/gastronomia.png`} 
                        className="tk_cat_bg" alt=''/>
                    </div>
                    <div class="bg_dark"></div>
                    <div class="tk_card_info">
                        <div>
                            <img src="img/categorias/gastronomia.svg" alt="" />
                                <h5>Gastronomia</h5>
                        </div>
                    </div>
                </div>
            </Link>
            <Link to="/entretenimiento">
                <div class="tk_section_card text-center">
                    <div>
                        <img src={`img/categorias/entretenimiento.png`} 
                        className="tk_cat_bg" alt=''/>
                    </div>
                    <div class="bg_dark"></div>
                    <div class="tk_card_info">
                        <div>
                            <img src="img/categorias/entretenimiento.svg" alt="" />
                                <h5>Entretenimiento</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}
