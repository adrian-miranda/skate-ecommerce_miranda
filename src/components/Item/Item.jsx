import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Item.css'
// import { ItemCount } from '../ItemCount/ItemCount'
// import { ItemDetailContainer } from '../ItemDetailContainer/ItemDetailContainer'

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
                    <Link to={`/item/${id}`}>
                        <button>Ver detalle de producto</button>
                    </Link>
                    <Card.Footer>Stock Disponible: {stock}</Card.Footer>
                    </Card.Body>
                </Card>
            </>
    )
}

