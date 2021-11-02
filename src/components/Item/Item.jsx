import {Card} from 'react-bootstrap'
import './Item.css'
// import { ItemCount } from '../ItemCount/ItemCount'
// import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'

export const Item = ({stock , id , title , price , description , pictureUrl}) =>{
    // const direccion = `/detalle/${id}`
    return(
            <>
                <Card className="col-md-10 col-lg-3 tarjeta">
                    <p>ID: {id}</p>
                    <Card.Title>Titulo Producto : {title}</Card.Title>
                    <Card.Text>Precio Producto : ${price}</Card.Text>
                    <Card.Text>Descripcion : {description}</Card.Text>
                    <Card.Img variant="top" src={pictureUrl} alt="aca va la foto" className="imagen"/>
                    <Card.Body>
                    {/* <ItemCount stock={stock}/> */}
                    <button>
                        <a href="{#}">Ver detalle de producto</a>
                        {/* <a href={<ItemDetailContainer />}>Ver Detalle del producto</a> */}
                        {/* <a href={direccion}>Ver Detalle del producto</a> */}
                    </button>
                    <Card.Footer>Stock Disponible: {stock}</Card.Footer>
                    </Card.Body>
                </Card>
            </>
    )
}

