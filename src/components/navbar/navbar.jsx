// los componentes comienzan con mayuscula , el archivo con minuscula y son .jsx o js
import './navbar.css'
import { NavLink } from 'react-router-dom'
import logoTienda from '../../img/skate.png' //Cuando se importa una imagen no lleva llaves
import {CartWidget} from '../CartWidget/CartWidget.jsx' // cuando se importa una funcion o componente se coloca entre llaves para poder usarlo o desectructurarlo
import Productos from '../../Productos.json'

export const NavBar = () => {
    const objetos = Productos
    const recorridos = objetos.map((objeto)=>{return <li><NavLink to={`/categories/${objeto.categoryId}`}>{objeto.title}</NavLink></li>});
    return(
        <div className="NavBar">
            <NavLink to={`/`}><img src={logoTienda} alt="imagen_logo" className='logoTienda'/></NavLink>
            <h1>Skate Store Adrian Miranda</h1>
            <ul>{recorridos}</ul>
            <CartWidget/>
        </div>
    ) 
}