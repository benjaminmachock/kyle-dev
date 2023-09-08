import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Land from "./components/Land/Land";
import Widget from "./components/Widget/Widget";
import Schedule from "./components/Schedule/Schedule";
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
          <Route path="/land" element={<Land />} />
          <Route path="/carousel" element={<KyleCarousel />} />
          <Route path="/widget" element={<Widget />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
