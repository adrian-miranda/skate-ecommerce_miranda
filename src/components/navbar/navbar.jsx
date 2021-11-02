// los componentes comienzan con mayuscula , el archivo con minuscula y son .jsx o js
import './navbar.css'
import logoTienda from '../../img/skate.png' //Cuando se importa una imagen no lleva llaves
import {CartWidget} from '../CartWidget/CartWidget.jsx' // cuando se importa una funcion o componente se coloca entre llaves
export const NavBar = () => {
    return(
        <div className="NavBar">
            <a href="{#}"><img src={logoTienda} alt="imagen_logo" className='logoTienda'/></a>
            <h1>Skate Store Adrian Miranda</h1>
            <ul>
                <li><a href="{#}">QUIENES SOMOS</a></li>
                <li><a href="{#}">TABLAS</a></li>
                <li><a href="{#}">TRUCKS</a></li>
                <li><a href="{#}">RUEDAS</a></li>
                <li><a href="{#}">RODAMIENTOS</a></li>
                <li><a href="{#}">TORNILLOS</a></li>
                <li><a href="{#}">LIJAS</a></li>
            </ul>
            <CartWidget/>
        </div>
    ) 
}