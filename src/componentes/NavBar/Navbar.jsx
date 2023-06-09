import { useState, useEffect } from 'react';
import './Navbar.css'
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from "../CartWidget/CartWidget"
import productos from "../../products/Products.json"
export const NavBar = () => {
    const [ItemsMenu, setItemsMenu] = useState ([])

    useEffect(() => {
        const ProductList = new Promise((resolve, reject) => resolve(productos))
        ProductList.then(result=>{
            const categories = result.map (item => item.Category)
            const uniqueCategories = new Set (categories)
            
            setItemsMenu([...uniqueCategories].sort())
        })
    }, [])

    return (
        <header>
            <Navbar bg="black" variant="dark">
                    <NavLink className='name' to="/">Hobby Shop
                    </NavLink>
                    <Nav className="me-auto navigation">
                        <NavLink to="/" >Home</NavLink>
                        {ItemsMenu?.map(item => <NavLink key={item} to={`category/${item}`}>{item} </NavLink>)}
                    </Nav>
                    <CartWidget/>
            </Navbar>
        </header>
    )
}