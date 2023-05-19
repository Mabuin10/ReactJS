import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemDetailContainer} from './componentes/ItemDetailContainer/ItemDetailContainer'
import {ItemListConteiner} from './container/ItemListContainer';
import {NavBar} from './componentes/NavBar/Navbar';
import {BrowserRouter, Routes, Route, NavLink} from "react-router-dom"
function App() {
  const onAdd = stock => console.log("El stock Actual es " + stock)
  return (
      <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path='/' element={<ItemListConteiner contenido = "Compra y venta de Hobby's" />}/>
            <Route path='/category/:id' element={<ItemListConteiner contenido = "Compra y venta de Hobby's" />}/>
            <Route path='/item/:id' element={<ItemDetailContainer onAdd = {onAdd}/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
