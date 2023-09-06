import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Land from "./components/Land/Land";
import Header1 from "./components/Header/Header1";

import Schedule from "./components/Schedule/Schedule";
// import { ModalProvider } from "./components/Book/Book";
import KyleCarousel from "./components/KyleCarousel/KyleCarousel";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";
//test

function App() {
  return (
    <>
      <Router>
        <Header1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/merchandise" element={<Merch />} />
          <Route path="/land" element={<Land />} />
          <Route path="/carousel" element={<KyleCarousel />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
