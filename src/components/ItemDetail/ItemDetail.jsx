// import { Item } from '../Item/Item'
import { Container, Row, Col, Card } from 'react-bootstrap';
export const ItemDetail = ({productoPrueba})=>{
    return(
        <>
        {/* {detalles ? detalles.map((detalle) => (
            <Item key={detalle.id} id={detalle.id} description={detalle.description} />
        )) : <h1>Cargando detalles</h1>} */}
            <Container>
                <Row>
                    <Col>
                        <Card className="tarjeta">
                            <Card.Text>Nombre : {productoPrueba.name}</Card.Text>
                            <Card.Footer>Id: {productoPrueba.id}</Card.Footer>
                            <Card.Header>Descripcion: {productoPrueba.description}</Card.Header>
                            <Card.Img></Card.Img>
                            <img src={productoPrueba.imagen} alt="aca va la foto" />
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </>
        
    )
}
