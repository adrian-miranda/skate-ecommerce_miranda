import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer"


export const Cart = ()=>{
    const {filtrado} = ItemDetailContainer
    console.log(filtrado)
    return <h1>Este es el carrito {filtrado} </h1>
}