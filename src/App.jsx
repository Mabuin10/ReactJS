import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {getFirestore, doc, getDoc} from "firebase/firestore"
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import { ItemListConteiner } from './container/ItemListContainer';
import { NavBar } from './componentes/NavBar/Navbar';
import { Cart } from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { useEffect } from 'react';
import { CartProvider } from './Context/CartContext';

function App() {
  useEffect(() => {
  const db = getFirestore()
  const refDoc = doc(db, "items", "b5QMrfbrO4NMJFuzOUeV")

  getDoc(refDoc).then(firtsTry => {
    console.log({id:firtsTry.id, data:firtsTry.data()})
  })
},[])



  const onAdd = stock => console.log("El stock Actual es " + stock)

  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListConteiner contenido="Compra y venta de Hobby's" />} />
            <Route path='/category/:id' element={<ItemListConteiner contenido="Compra y venta de Hobby's" />} />
            <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
