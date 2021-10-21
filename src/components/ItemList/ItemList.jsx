import './ItemList.css';
import Productos from '../../Productos.json'
import { Item } from '../Item/Item';
import { useState , useEffect } from 'react';

export const ItemList = ({items}) =>{
    const [productos , setProductos] = useState([]);
    const cargaCatalogo = (data) => 
    new Promise((resolve , reject) =>{
        setTimeout(() =>{
            if(data){
                resolve(data)
            }else{
                reject('sin productos en stock')
            }
        },2000)
    });
    useEffect(()=>{
        cargaCatalogo(Productos)
        .then((respuesta)=> setProductos(respuesta))
        .catch((error)=> console.log(error));
    }, []);
    return(
        <>
        {productos.length? productos.map((producto) => (
            <Item key={producto.id} id={producto.id} title={producto.title} description={producto.description} price={producto.price}/>
            )) : <h1>Cargando Catalogo</h1>}
            </>
            )
        }
console.log(Productos)