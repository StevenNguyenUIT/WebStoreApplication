import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Products, ProductDetail, Orders, ShoppingCart, Cart, 
  Main, OrderDetail, CheckoutPersonalInfo, CheckoutPayment, CheckoutDetails, ProductReview} from './pages'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Main/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/productreview' element={<ProductReview/>}/>
          <Route path='/orders' element={<Orders/>}/>
          <Route path='/orderdetail' element={<OrderDetail/>}/>
          <Route path='/shoppings' element={<ShoppingCart/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/checkout/personalinfo' element={<CheckoutPersonalInfo/>}/>
          <Route path='/checkout/payment' element={<CheckoutPayment/>}/>
          <Route path='/checkout/details' element={<CheckoutDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
