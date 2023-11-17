import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Products, ProductDetail, Orders, ShoppingCart, Cart, Main} from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/shoppings' element={<ShoppingCart/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
