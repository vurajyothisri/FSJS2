import Cards from './Cards.js'
import Footer from './Footer.js'
import './App.css';
import Navbar from './Navbar.js'
import { Outlet } from "react-router-dom";

function App() {
  return (
    
      <>
      <Navbar />
      <Outlet/>
      <Cards/>
      <Footer/>
      </>
  );
}

export default App;
