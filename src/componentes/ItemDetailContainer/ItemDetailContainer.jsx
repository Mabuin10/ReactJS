import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import productos from "../../products/Products.json"


export const ItemDetailContainer = ({onAdd}) => {
    const [products, setProductos] = useState({})
    const { id } = useParams()
    useEffect(() => {
        const getItem = new Promise((resolve, reject) => {
            setTimeout(() => {
                const producto = productos.find(item => item.id === id)
                resolve(producto)
            }
                , 2000)
        })
        getItem.then(result => setProductos(result))
    }, [id])
    
    return (
        <div>
            <ItemDetail products={products} onAdd = {onAdd}/>
        </div>
    )
    
}