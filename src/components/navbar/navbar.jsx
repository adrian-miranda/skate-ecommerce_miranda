// los componentes comienzan con mayuscula , el archivo con minuscula y son .jsx o js
import './navbar.css'
import { NavLink } from 'react-router-dom'
import logoTienda from '../../img/skate.png' //Cuando se importa una imagen no lleva llaves
import {CartWidget} from '../CartWidget/CartWidget.jsx' // cuando se importa una funcion o componente se coloca entre llaves para poder usarlo o desectructurarlo
export const NavBar = () => {
    return(
        <div className="NavBar">
            <NavLink to={`/`}><img src={logoTienda} alt="imagen_logo" className='logoTienda'/></NavLink>
            <h1>Skate Store Adrian Miranda</h1>
            <ul>
                <li><NavLink to={`/`}>HOME</NavLink></li>
                <li><NavLink to={`/category`}>TABLAS</NavLink></li>
                <li><NavLink to={`/category`}>TRUCKS</NavLink></li>
                <li><NavLink to={`/category`}>RUEDAS</NavLink></li>
                <li><NavLink to={`/category`}>RODAMIENTOS</NavLink></li>
                <li><NavLink to={`/category`}>TORNILLOS</NavLink></li>
                <li><NavLink to={`/category`}>LIJAS</NavLink></li>
            </ul>
            <CartWidget/>
        </div>
    ) 
}