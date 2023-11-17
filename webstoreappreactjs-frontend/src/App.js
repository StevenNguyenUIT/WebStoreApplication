import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Products, Orders, ShoppingCart, Cart} from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/shoppings' element={<ShoppingCart/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
