import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home Page/Home";
import About from './Pages/About Page/About';
import Contact from './Pages/Contact Page/Contact';
import SignIn from './Pages/SignIn Page/SignIn';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/signin' element={<SignIn/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
