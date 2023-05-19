import { ItemCounter } from "../ItemCounter/ItemCounter";

export const ItemDetail =  ({products, onAdd}) => (
    <div>
        <h1>{products.name}</h1>
        <img src={products.img} alt={products.stock}/>
        <p>$ {products.price}</p>
        <ItemCounter stock = {products.stock} onAdd = {onAdd}/>
    </div>
)