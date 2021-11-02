import {Card} from 'react-bootstrap'
import './Item.css'
// import { ItemCount } from '../ItemCount/ItemCount'

export const Item = ({stock , id , title , price , description , pictureUrl}) =>{
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
                        <a href="{#}">Ver Detalle del producto</a>
                    </button>
                    <Card.Footer>Stock Disponible: {stock}</Card.Footer>
                    </Card.Body>
                </Card>
            </>
    )
}

