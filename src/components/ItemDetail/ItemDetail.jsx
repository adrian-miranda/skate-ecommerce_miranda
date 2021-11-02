import { Item } from '../Item/Item'

export const ItemDetail = ({detalles})=>{
    return(
        <>
        {detalles ? detalles.map((detalle) => (
            <Item key={detalle.id} id={detalle.id} description={detalle.description} />
        )) : <h1>Cargando detalles</h1>}
            
        </>
        
    )
}
