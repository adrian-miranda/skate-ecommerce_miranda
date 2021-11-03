import { Container, Row, Col, Card } from 'react-bootstrap';

export const ItemDetail = ({filtrado})=>{
    const {id , title, description , price , stock , pictureUrl} = filtrado
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <Card className="tarjeta">
                            <Card.Footer>Id: {filtrado.id}</Card.Footer>
                            <Card.Text>Nombre : {filtrado.title}</Card.Text>
                            <Card.Header>Descripcion: {description} </Card.Header>
                            <Card.Img src={pictureUrl}></Card.Img>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </>
        
    )
}
