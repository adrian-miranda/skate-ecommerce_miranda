import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { ItemCount } from '../ItemCount/ItemCount';

export const ItemDetail = ({filtrado})=>{
    const {// id, // title, 
        description, 
        // price, // stock, 
        pictureUrl} = filtrado

    const [contador, setContador] = useState(0);
    const agregar = () =>{
        if(contador < filtrado.stock){
            setContador(contador + 1 );
            
        }else{
            alert('no puedes agregar mas')
        }
    }
    const quitar = () =>{
        if(contador === 0){
            alert('no puedes restar elementos')
        }else{
            setContador(contador - 1);
        }
    }
    const resumen = (filtrado.stock - contador)
    return(
        <>  
            <h1>Detalle del Producto</h1>
            <Container>
                <Row>
                    <Col>
                        <Card className="tarjeta">
                            <Card.Footer>Id: {filtrado.id}</Card.Footer>
                            <Card.Text>Nombre : {filtrado.title}</Card.Text>
                            <Card.Text>Nombre : ${filtrado.price}</Card.Text>
                            <Card.Header>Descripcion: {description} </Card.Header>
                            <Card.Img src={pictureUrl} alt="aca va la imagen"></Card.Img>
                            <ItemCount stock={resumen} />
                            <p>cantidad seleccionada : {contador}</p>
                            <button onClick={agregar}>Agregar Producto</button>
                            <button onClick={quitar}>Restar Producto</button>
                            <NavLink to={`/Cart`}><button>Terminar mi compra</button></ NavLink>
                        </Card>
                    </Col>
                </Row>
            </Container>
            
        </>
        
    )
}
