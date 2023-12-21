import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
