import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { ItemCounter } from "../ItemCounter/ItemCounter";
import { Link } from "react-router-dom";
import './ItemDetail.css'



export const ItemDetail = ({ items }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)
    const onAdd = (counter) => {
        addItem(items, counter)
        setQuantityAdded(counter)

    }

    return (
        <div className="prodDetail">
            <header>
                <h1 className="titleDetail">{items.title}</h1>
            </header>
            <picture className="imgdetail">
                <img src={items.img} alt={items.descripcion} />
            </picture>

            <div className="detail">
                <p >{items.descripcion}</p>
            </div>
            <div className="detail">
                <b >Price: ${items.price}</b>
            </div>
            <footer>
                <div>{
                    quantityAdded > 0 ? (
                        <div>
                            <Link className="button" to="/">See more Products</Link>
                            <Link className="button" to="/cart">Go Cart</Link>
                        </div>
                    ) : (
                        <ItemCounter className="counter justify-content-md-center" stock={items.stock} onAdd={onAdd} />
                    )}
                </div>

            </footer>
        </div>
    )
}
