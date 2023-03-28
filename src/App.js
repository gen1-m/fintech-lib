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

// importing register for Krystyna to use the page to register 
// all the members with all the neccessary properties 
import Register from "./Register";

function App() {
  return (     
    <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login/>} />
          <Route path = "/dashboard" element = {<Dashboard/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/reset" element = {<Reset/>} /> 
          <Route path= "/about" element={<About/>} />
          <Route path= "/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
  )
}

export default App;

/*------------ The page Register.js, maybe needed in the future ----------*/
{/* <Route path = "/register" element = {<Register/>} />  */}
// import Register from "./Register";