import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import Badge from 'react-bootstrap/Badge';

const CartWidget = () => {
    return (
        <Badge bg="success">
            <FontAwesomeIcon icon={faCartShopping} size='2xl'/>
            <span>0</span>
        </Badge>
    )
}
export default CartWidget