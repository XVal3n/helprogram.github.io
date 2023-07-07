import './App.css';
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About"
import Contact from "./pages/Contact"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/Menu" element={<Menu/>} ></Route>
          <Route path="/About" element={<About/>} ></Route>
          <Route path="/Contact" element={<Contact/>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
