// import { Item } from '../Item/Item'
import { Container, Row, Col, Card } from 'react-bootstrap';

export const ItemDetail = ({filtrado})=>{
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className="tarjeta">
                            {/* <Card.Text>Nombre : {filtrado.name}</Card.Text> */}
                            {/* <Card.Footer>Id: {filtrado.id}</Card.Footer> */}
                            <Card.Header>Descripcion: {filtrado} la descripcion</Card.Header>
                            <Card.Img></Card.Img>
                            <img src={filtrado} alt="aca va la foto" />
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </>
        
    )
}
