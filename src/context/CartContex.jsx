import React , { useState , useContext} from "react";
// import { ItemDetail } from "../components/ItemDetail/ItemDetail";

const CartContext = React.createContext();
export const ElContexto = ()=>{
    const [cart, setCart] = useState([]);
    const Contexto = useContext(cart)
    console.log(Contexto, 'este es el contexto')
    return( 
        <h1>{CartContext}</h1>
    )
}
