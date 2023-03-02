import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import './index.css';
import './books.css';
import './nav_cv.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./Login";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Home from "./Home";
import About from "./About";

function App() {
  return (     
    <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login/>} />
          <Route path = "/dashboard" element = {<Dashboard/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/reset" element = {<Reset/>} /> 
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;

/*------------ The page Register.js, maybe needed in the future ----------*/
{/* <Route path = "/register" element = {<Register/>} />  */}
// import Register from "./Register";