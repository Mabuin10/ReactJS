import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail";
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

    return (
        <div>
            <ItemDetail items={product} onAdd = {onAdd}/>
        </div>
    )
    
}