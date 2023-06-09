import { Link } from "react-router-dom"
import { CartContext } from "../../Context/CartContext"
import { useContext } from "react"
import './Cart.css'


export const Cart = () => {

  const { cart, removeItem, clearCart, Total } = useContext(CartContext)


  return (
    <div>
      <h2 className='title'>YOUR CART</h2>
      <div className='divCart'>
        {
          cart.map((item) => (
            <div className="cartContent" key={item.id}>
              <div className='cartContent_container'>
                <img className="cartImg" src={item.img} alt="img" />
                <div className="cartSection">
                  <p className="detailTitle">{item.name}</p>
                </div>
                <div className='cart_description'>
                  <p className="cart_price">${item.price}</p>
                  <p className="cart_quantity">{item.quantity}</p>
                </div>
                <button onClick={() => removeItem(item.id)} className='emptyButton'>Delete</button>
              </div>
            </div>
          ))
        }
      </div>
      <div >
        <h3 className="divCart"><strong>TOTAL: $ { Total }</strong></h3>
        <button onClick={clearCart} className="emptyButton divCart">Clear Out Cart</button>
      </div>
      <div className="divCart">
        <Link className="emptyButton" to="/Checkoutform">CheckOut</Link>
      </div>
    </div>
  )
  // <Container>
  //     <h1>Lista de Productos</h1>
  //     {!cart.length ? (
  //       <p>Cart Empty</p>
  //     ) : (
  //       <>
  //         <thead>
  //           <tr>
  //             <th>Nombre</th>
  //             <th></th>
  //             <th>Precio</th>
  //             <th>Cantidad</th>
  //             <th></th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {cart.map(item =>(
  //             <tr key={item.id}>
  //               <td>{item.title}</td>
  //               <td>
  //                 <img height={60} src={item.img} alt={item.title}/>
  //               </td>
  //               <td>{item.price}</td>
  //               <td>{item.quantity}</td>
  //               <td>
  //                 <button onClick={() => removeItem(item.id)}>Delete</button>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //         <tfoot>
  //             <td>Total</td>
  //             <td></td>
  //             <td>{Total}</td>
  //         </tfoot>
  //       </>
  //     )}
  //     <div>
  //       <button onClick = {clearCart} >Clear Out Cart</button>
  //     </div>
  //     <div>
  //       <Link to="/Checkoutform">CheckOut</Link>
  //     </div>
  // </Container>
}