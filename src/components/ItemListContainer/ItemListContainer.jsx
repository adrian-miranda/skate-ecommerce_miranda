import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Cards } from '../Card/Card';

export const ItemListContainer = () => {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col className='tarjetas'>
                        <Cards stock={6}/>
                        <Cards />
                        <Cards stock={1}/>
                        <Cards stock={0}/>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }