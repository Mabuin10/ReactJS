import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";



export const ItemDetail = ({ items }) => {
    const  [quantityAdded, setQuantityAdded] = useState(0)
    
    const {addItem} = useContext(CartContext)
    const onAdd = (counter) => {
        addItem(items, counter)
        setQuantityAdded(counter)
      
    }
    
    return(
    <div>
        <header>
            <h1>{items.title}</h1>
        </header>
        <picture>
            <img src={items.img} alt={items.descripcion} />
        </picture>
        <div>
            <p>Category: {items.category}</p>
            <p>Description: {items.descripcion}</p>
            <p>Precio: ${items.price}</p>
        </div>
        <footer>
            {
            quantityAdded > 0? (
                <Link to="/cart">Terminar Compra</Link> 
            ):(
            <ItemCounter stock={items.stock} onAdd={onAdd}/>
            )}

        </footer>
    </div>
)}
