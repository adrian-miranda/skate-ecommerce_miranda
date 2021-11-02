import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useState , useEffect } from 'react';
import Productos from '../../Productos.json'


export const ItemListContainer = () => {
    
    const [productos , setProductos] = useState([]);
    
    const cargaCatalogo = (data) => 
    new Promise((resolve , reject) =>{
        setTimeout(() =>{
            if(data){
                resolve(data)
            }else{
                reject('sin productos en stock')
            }
        },2000)
    });
    useEffect(()=>{
        cargaCatalogo(Productos)
        .then((respuesta)=> setProductos(respuesta))
        .catch((error)=> console.log(error));
    }, []);
    return(
        <>
            <Container fluid>
                <Row>
                    <Col className='tarjetas' >
                    <ItemList productos={productos}/>
                    </Col>
                </Row>
            </Container>
        </>
        )
    }