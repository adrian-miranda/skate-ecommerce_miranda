import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";

import Productos from '../../Productos.json'
import { useParams } from "react-router-dom";

export const ItemDetailContainer = ()=>{
    const [detailProducto , setDetailProducto] = useState([])

const {id}  = useParams();
const itemId =parseInt(id);

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
    const filtrado = detailProducto.filter((filtro) => filtro.id === itemId).map(filtrado => ( <ItemDetail key={filtrado.id} filtrado={filtrado} /> ) )
    console.log(filtrado)
    return(
        <>
            {filtrado}
        </>
    )
}