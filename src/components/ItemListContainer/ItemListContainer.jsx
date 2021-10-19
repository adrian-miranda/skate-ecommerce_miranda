import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Cards } from '../Card/Card';

export const ItemListContainer = (props) => {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col className='tarjetas'>
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </Col>
                </Row>
            </Container>
        </>
        )
    }