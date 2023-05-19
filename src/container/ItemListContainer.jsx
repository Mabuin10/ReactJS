import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import productos from "../products/Products.json";
import { ItemList } from "../componentes/ItemList/ItemList.jsx";

export const ItemListConteiner = ({ contenido }) => {
    const [list, setList] = useState([])
    const { id } = useParams()
    useEffect(() => {
        const ProductList = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }
                , 2000)
        })
        ProductList.then(result => {
            if (id) {
                const itemsFiltered = result.filter(item => item.Category === id)
                setList(itemsFiltered)
            } else {
                setList(result)
            }
        })
    }, [id])
    return (
        <Container>
            <h1>{contenido}</h1>
            <ItemList list={list} />
        </Container>
    )
}