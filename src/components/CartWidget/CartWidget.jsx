import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './CartWidget.css'

export const CartWidget = () =>{
    return (
        <div className="CartWidget">
            <FontAwesomeIcon icon={faShoppingCart}/>
        </div>
    ) 
}