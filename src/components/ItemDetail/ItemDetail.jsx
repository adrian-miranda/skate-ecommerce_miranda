import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({filtrado})=>{
    const { id,  title, description,  price,  stock, pictureUrl} = filtrado

    const [cantidad, setCantidad] = useState(0);
    const [componente, setComponente] = useState(true);
    
    const agregarCarrito = (itemsAgregados) => {
        setCantidad(itemsAgregados);
        setComponente(false);
        filtrado.stock-=itemsAgregados;
    }
    console.log('cantidad seleccionada' ,cantidad)
    console.log('componente' ,componente)
    return(
        <>  
            <h1>Detalle del Producto</h1>
            <Container>
                <Row>
                    <Col>
                        <Card className="tarjeta">
                            <Card.Footer>Id: {id}</Card.Footer>
                            <Card.Text>Nombre : {title}</Card.Text>
                            <Card.Text>Nombre : ${price}</Card.Text>
                            <Card.Header>Descripcion: {description} </Card.Header>
                            <Card.Img src={pictureUrl} alt="aca va la imagen"></Card.Img>
                            {<ItemCount stock={stock} onAdd={agregarCarrito} />} 
                            <NavLink to={`/Cart`}><button>Terminar mi compra</button></ NavLink>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </>
        
    )
}
