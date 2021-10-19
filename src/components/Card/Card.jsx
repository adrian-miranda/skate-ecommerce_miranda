import {Card} from 'react-bootstrap'
import { ItemCount } from '../ItemCount/ItemCount'
import './Card.css'
export const Cards = () =>{
    return(
            <>
                <Card className="col-md-10 col-lg-3 tarjeta">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                    <Card.Title>Nombre del articulo</Card.Title>
                    <Card.Text>Descripcion del articulo
                    </Card.Text>
                    <ItemCount stock={5}/>
                    </Card.Body>
                </Card>
            </>
    )
}

