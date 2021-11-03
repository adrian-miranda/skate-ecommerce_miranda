import { Container, Row, Col, Card } from 'react-bootstrap';

export const ItemDetail = ({filtrado})=>{
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className="tarjeta">
                            {/* <Card.Text>Nombre : {filtrado.id}</Card.Text> */}
                            {/* <Card.Footer>Id: {filtrado.title}</Card.Footer> */}
                            <Card.Header>Descripcion: {filtrado.description} la descripcion</Card.Header>
                            <Card.Img></Card.Img>
                            <img src={filtrado.pictureUrl} alt="aca va la foto" />
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </>
        
    )
}
