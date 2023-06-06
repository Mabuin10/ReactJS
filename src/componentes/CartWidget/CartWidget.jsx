import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { cart} = useContext(CartContext)
    const TotalQuantity = () => cart.reduce(
        (acumulador, valorActual) =>
        acumulador + valorActual.quantity, 0
      )

    return (
        !!TotalQuantity() &&(
        <Badge bg="success" >
            <Link to ="/cart">
            <FontAwesomeIcon icon={faCartShopping} size='2xl' />
            <span >{TotalQuantity()}</span>
            </Link>
        </Badge>
    ))
}
export default CartWidget