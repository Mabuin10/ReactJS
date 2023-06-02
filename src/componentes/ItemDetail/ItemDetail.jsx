import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";



export const ItemDetail = ({ products }) => {
    const  [quantityAdded, setQuantityAdded] = useState(0)
    
    const {addItem} = useContext(CartContext)

    const handleOnAdd = (counter) => {
        setQuantityAdded (counter)
        
        const item = {products}

        addItem(item, counter)
    }
    return(
    <div>
        <header>
            <h1>{products.name}</h1>
        </header>
        <picture>
            <img src={products.img} alt={products.descripcion} />
        </picture>
        <div>
            <p>Category: {products.category}</p>
            <p>Description: {products.descripcion}</p>
            <p>Precio: ${products.price}</p>
        </div>
        <footer>
            {
            quantityAdded > 0? (
                <Link to="/cart">Terminar Compra</Link> 
            ):(
            <ItemCounter stock={products.stock} onAdd={handleOnAdd}/>
            )}

        </footer>
    </div>
)}
