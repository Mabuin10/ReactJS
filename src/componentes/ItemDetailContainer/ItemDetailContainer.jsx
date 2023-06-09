import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
// import productos from "../../products/Products.json"
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../Services-Firebase/FirebaseConfig";


export const ItemDetailContainer = ({onAdd}) => {
    const [product, setProduct] = useState([])


    const { id } = useParams()
    
    useEffect(() => {

        const itemRef = doc(db, 'items', id)

        getDoc(itemRef)
            .then(response => {
                const data = response.data()
                const productsAdapted = {id: response.id, ...data}
                setProduct(productsAdapted)
                
            })
            .catch(error => {
                console.log(error)
            })
            
    }, [id])
    // const [products, setProducts] = useState({})
    // const { id } = useParams()
    // useEffect(() => {
    //     const getItem = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const producto = productos.find(item => item.id === id)
    //             resolve(producto)
    //         }
    //             , 2000)
    //     })
    //     getItem.then(result => setProducts(result))
    // }, [id])
    
    // return (
    //     <div>
    //         <ItemDetail items={products} onAdd = {onAdd}/>
    //     </div>
    // )
    return (
        <div>
            <ItemDetail items={product} onAdd = {onAdd}/>
        </div>
    )
    
}