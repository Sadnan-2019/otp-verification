import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Route, Routes, Outlet } from "react-router-dom";
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>

      <Route path="/" element={<Home></Home>}></Route>
  
      <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      {/* <Home></Home> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
