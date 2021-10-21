import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';


export const ItemListContainer = () => {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col className='tarjetas'>
                    <ItemList />
                    </Col>
                </Row>
            </Container>
        </>
        )
    }