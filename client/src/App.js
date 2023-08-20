import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Land from "./components/Land/Land";
import Header from "./components/Header/Header";
import Schedule from "./components/Schedule/Schedule";
import Book from "./components/Book/Book";
import Contact from "./components/Contact/Contact";
import KyleCarousel from "./components/KyleCarousel/KyleCarousel";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/merchandise" element={<Merch />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/landing" element={<Land />} />
          <Route path="/carousel" element={<KyleCarousel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
