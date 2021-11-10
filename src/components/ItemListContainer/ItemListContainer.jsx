/* eslint-disable react-hooks/exhaustive-deps */
import './ItemListContainer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { ItemList } from '../ItemList/ItemList';
import { useState , useEffect } from 'react';
import Productos from '../../Productos.json'
import { useParams } from 'react-router';

export const ItemListContainer = () => {
    const {categoryIdTxt} = useParams();
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
        // .then((respuesta)=> categoryId ? setProductos(respuesta.filter(producto => parseInt(producto.categoryId) === parseInt(categoryId))) : setProductos(respuesta))
        .then((respuesta)=> categoryIdTxt ? setProductos(respuesta.filter(producto => producto.categoryIdTxt === categoryIdTxt)) : setProductos(respuesta))
        .catch((error)=> console.log(error));
        console.log('la categoria es',categoryIdTxt)
        console.log('los productos son',categoryIdTxt)
    }, [categoryIdTxt]);
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
    