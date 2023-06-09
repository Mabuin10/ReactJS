import { Link } from 'react-router-dom';
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Item = ({ item }) => (
    <div className=''>
        <div className=''>
            <div className=''>
                <Card className='card' key={item.id}>
                    <img className="card-img" variant="top" src={item.img} alt='img'></img>
                    <Card.Body className='card-body'>
                        <Card.Title className='card-title' >{item.title}</Card.Title>
                        <Card.Text className='card-text'>{item.description}</Card.Text>
                        <Card.Text className='card-text-secondary'>${item.price}</Card.Text>
                        <Link to= {`/item/${item.id}`}>
                            <Button variant="danger">Ver Detalle</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
)