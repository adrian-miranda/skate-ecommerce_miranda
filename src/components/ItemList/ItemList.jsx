import './ItemList.css';
import { Item } from '../Item/Item';
// import Productos from '../../Productos.json'
// import { useState , useEffect } from 'react';

export const ItemList = ({productos}) =>{
    
    return(
        <>
        {productos.length ? productos.map((producto) => (
            <Item key={producto.id} stock={producto.stock} id={producto.id} title={producto.title} description={producto.description} price={producto.price} />
            )) : <h1>Cargando Catalogo</h1>}
            </>
            )
        }
// console.log(Productos)