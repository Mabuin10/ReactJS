import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => (
    <div className=''>
        <div className=''>
            <div className=''>
                <Card key={item.id}>
                    <Card.Img variant="top" src={item.img} />
                    <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                        <Card.Text>${item.price}</Card.Text>
                        <Link to= {`/item/${item.id}`}>
                            <Button variant="primary">Ver Detalle</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
)