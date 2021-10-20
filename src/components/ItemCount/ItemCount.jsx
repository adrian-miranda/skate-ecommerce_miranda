import { Container, Row , Col , Stack} from "react-bootstrap"
import {useState} from 'react'
import './ItemCount.css'

export const ItemCount = ({stock = 0 , initial = 1}) =>{

    const [count, setCount] = useState(initial);
    const agregar = () =>{
        if(stock === 0){
            alert('sin stock')
        }else if(count >= stock){
            alert('no puedes agregar mas')
        }else{
            setCount(count+1)
        }
    }

    const restar = () => {
        if (count <= 1){
            alert('no puedes agregar menos de 1')
        }else{
            setCount(count-1)
        }
    }
    return(
        <>
            <Container>
                <Row>
                    <Col >
                        <Stack direction="horizontal" gap={3} className="botonera">
                            <button onClick={restar}>-1</button>
                            <p>{count}</p>
                            <button onClick={agregar}>+1</button>
                            <button >Agregar al carrito</button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
    // bajo la linea 7
    // const agregar = () => setCount(count+1)
    // const restar = () => setCount(count-1)