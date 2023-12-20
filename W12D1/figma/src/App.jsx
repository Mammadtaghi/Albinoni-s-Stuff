import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from './Context/productContext';
import Wishlist from "./Pages/Whishlist Page";
import Contact from "./Pages/Contact Page";
import SignUp from './Pages/SignUp Page';
import About from "./Pages/About Page";
import Layout from "./Layout/Layout";
import Home from './Pages/Home Page';
import Cart from "./Pages/Cart Page";
import './App.css'
import Login from "./Pages/LogIn Page";
import { BasketProvider } from "./Context/basketContext";

function App() {

  return (
    <BrowserRouter>
      <ProductProvider>
        <BasketProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/signup' element={<SignUp />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/wishlist' element={<Wishlist />}></Route>
            </Route>
          </Routes>
        </BasketProvider>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
