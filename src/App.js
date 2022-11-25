import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Auth from "./Auth"
import Login from "./Login"
import Register from "./Register";
import Reset from "./Reset";
import Dashboard from "./Dashboard";
import Home from "./Home";  

function App() {
  return (
    
      // <Router>
      //   <Switch>
      //     <Route exaxt path = "/" component = {Login} />
      //   </Switch>
      // </Router>
        
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Login/>} />
          <Route path = "/register" element = {<Register/>} /> 
          <Route path = "/dashboard" element = {<Dashboard/>} />
          <Route path = "/home" element = {<Home/>} />
          <Route path = "/reset" element = {<Reset/>} /> 
        </Routes>
      </BrowserRouter>
  )
}

export default App;
