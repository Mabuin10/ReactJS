import Container from "react-bootstrap/esm/Container"
import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { useContext} from "react"


export const Cart = () => {
  
  const { cart, removeItem, clearCart,Total } = useContext(CartContext)

  
    return (
    <Container>
        <h1>Lista de Productos</h1>
        {!cart.length ? (
          <p>Cart Empty</p>
        ) : (
          <>
            <thead>
              <tr>
                <th>Nombre</th>
                <th></th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item =>(
                <tr key={item.id}>
                  <td>{item.title}</td>
                  <td>
                    <img height={60} src={item.img} alt={item.title}/>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
                <td>Total</td>
                <td></td>
                <td>{Total}</td>
            </tfoot>
          </>
        )}
        <div>
          <button onClick = {clearCart} >Clear Out Cart</button>
        </div>
        <div>
          <Link to="/Checkoutform">CheckOut</Link>
        </div>
    </Container>
)}