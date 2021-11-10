import './ItemList.css';
import { Item } from '../Item/Item';

export const ItemList = ({productos}) =>{
    console.log(productos)
    return(
        <>
        {productos.length ? productos.map((producto) => (
            <Item key={producto.id} stock={producto.stock} id={producto.id} title={producto.title} description={producto.description} price={producto.price} pictureUrl={producto.pictureUrl} categoryId={producto.categoryId} />
            )) : <h1>Cargando Catalogo</h1>}
            </>
            )
        }
        