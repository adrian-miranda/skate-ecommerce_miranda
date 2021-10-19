import {Card , Button} from 'react-bootstrap'
import { Counter } from '../Counter/Counter'
import './Card.css'
export const Cards = () =>{
    return(
            <>
                        <Card className="col-md-10 col-lg-3 tarjeta">
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.
                            </Card.Text>
                            <Counter />
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        </Card>
            </>
    )
}

