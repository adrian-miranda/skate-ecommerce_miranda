import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Item } from '../Item/Item';

export const ItemListContainer = () => {
    return(
        <>
            <Container fluid>
                <Row>
                    <Col className='tarjetas'>
                        <Item stock={6}/>
                        <Item />
                        <Item stock={1}/>
                        <Item stock={0}/>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }