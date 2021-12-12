import { createContext, useState , useContext} from "react";


const CartContext = createContext();
export const ElContexto = () => useContext(CartContext);
export const CartProvider = ({children})=>{
    const [prodCarro , setProdCarro] = useState([1,2,3,4]);
    return(
        <CartContext.Provider value={{prodCarro , setProdCarro}}>
            {children}
        </CartContext.Provider>
    )
}