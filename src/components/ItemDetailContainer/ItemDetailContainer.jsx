import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import Productos from '../../Productos.json'

export const ItemDetailContainer = ()=>{
    // const productoPrueba = {
    //     id : 9,
    //     name : "ProductoDePrueba1",
    //     description : "Aca va la descripcion del producto",
    //     imagen : "https://m.media-amazon.com/images/I/61VX2hb1l5L._AC_SY741_.jpg"
    // }
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

    const filtrado = detailProducto.filter(filtro => filtro.id === 3).map((filtro) => filtro)
    console.log(filtrado)
    return(
        <><ItemDetail productoPrueba={filtrado} /></>
    )
}

