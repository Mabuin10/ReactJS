import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../Services-Firebase/FirebaseConfig.js";
// import productos from "../products/Products.json";
import { ItemList } from "../componentes/ItemList/ItemList.jsx";

export const ItemListConteiner = ({ contenido }) => {
    const [list, setList] = useState([])

    const { category } = useParams()

    useEffect(() => {
        
        const collectionRef = category

            ? query(collection(db, 'items'), where('category', '==', category))
            : collection(db, 'items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setList(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    })
    // const [list, setList] = useState([])
    // const { id } = useParams()
    // useEffect(() => {
    //     const ProductList = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve(productos)
    //         }
    //             , 2000)
    //     })
    //     ProductList.then(result => {
    //         if (id) {
    //             const itemsFiltered = result.filter(item => item.Category === id)
    //             setList(itemsFiltered)
    //         } else {
    //             setList(result)
    //         }
    //     })
    // }, [id])
    return (
            <div >
                <h1>{contenido}</h1>
                <div>
                    <ItemList list={list} />
                </div>
            </div>
    )
}