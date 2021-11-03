import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Productos from '../../Productos.json'

export const ItemDetailContainer = ()=>{
    const [detailProducto , setDetailProducto] = useState([])
    const getItem = (data) =>
    new Promise((resolve , reject)=>{
        setTimeout(() =>{
            if(data){
                resolve(data)
                console.log(data)
            }else{
                reject('No hay detalle')
            }
        }, 2000 )
    });
    useEffect(()=>{
        getItem(Productos)
        .then((respuesta)=> setDetailProducto(respuesta))
        .catch((error)=> console.log(error))
    } , [])

    const filtrado = detailProducto.filter((filtro) => filtro.id === 3).map(filtrado => ( <ItemDetail key={filtrado.id} filtrado={filtrado} /> ) )
    console.log(filtrado)
    const objetoFiltrado = detailProducto.filter((filtro) => filtro.id === 3)
    console.log(objetoFiltrado)
    return(
        <>
            {filtrado}
        </>
    )
}

