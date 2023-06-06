import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../Services-Firebase/FirebaseConfig.js";
// import productos from "../products/Products.json";
import { ItemList } from "../componentes/ItemList/ItemList.jsx";

export const ItemListConteiner = ({ contenido }) => {
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {
        setLoading(true)

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
            .finally(() => {
                setLoading(false)
            })
    })
        return (
            <Container>
                <h1>{contenido}</h1>
                <ItemList list={list} />
            </Container>
        )
    }