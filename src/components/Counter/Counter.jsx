import { Container, Row , Col , Stack} from "react-bootstrap"
import '../Counter/Counter.css'

export const Counter = () =>{
    return(
        <>
            <Container>
                <Row>
                    <Col >
                    <Stack direction="horizontal" gap={3} className="botonera">
                        <button>+</button>
                        <p>$0</p>
                        <button>-</button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </>
    )
}