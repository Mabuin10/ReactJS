import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer'
import { ItemListConteiner } from './container/ItemListContainer';
import { NavBar } from './componentes/NavBar/Navbar';
import { Cart } from './componentes/Cart/Cart';
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import { CartProvider } from './Context/CartContext';
import { CheckoutForm } from './componentes/CheckoutForm/CheackoutForm';

function App() {

  const onAdd = stock => console.log("El stock Actual es " + stock)

  return (
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListConteiner contenido="Compra y venta de Hobby's" />} />
            <Route path='/category/:category' element={<ItemListConteiner contenido="Compra y venta de Hobby's" />} />
            <Route path='/item/:id' element={<ItemDetailContainer onAdd={onAdd} />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkoutform' element={<CheckoutForm />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
  );
}

export default App;
