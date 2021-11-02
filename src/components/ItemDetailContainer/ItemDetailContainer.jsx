import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = ()=>{

    const [detailProducto , setDetailProducto] = useState('')
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
        getItem(detailProducto)
        .then((respuesta)=> setDetailProducto(respuesta))
        .catch((error)=> console.log(error))
        console.log(`el producto es: ${detailProducto}`)
    } , [])
    return(
        <>
            <ItemDetail />
        </>
    )
    
}
