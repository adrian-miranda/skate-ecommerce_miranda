import {Card} from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './Item.css'
export const Item = ({stock}) =>{
    return(
            <>
                <Card className="col-md-10 col-lg-3 tarjeta">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Nombre del articulo</Card.Title>
                    <Card.Text>Descripcion del articulo
                    </Card.Text>
                        <ItemCount stock={stock}/>
                        <button>
                            <a href="{#}">Ver Detalle del producto</a>
                        </button>
                    </Card.Body>
                </Card>
            </>
    )
}

