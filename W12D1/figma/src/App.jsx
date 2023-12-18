import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from './Pages/Home Page';
import About from "./Pages/About Page";
import Contact from "./Pages/Contact Page";
import SignIn from "./Pages/SignIn Page";
import { ProductProvider } from './Context/productContext';

function App() {

  return (
    <BrowserRouter>
    <ProductProvider>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Route>
      </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
}

export default App
