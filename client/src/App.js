import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Land from "./components/Land/Land";
import Header from "./components/Header/Header";
import Schedule from "./components/Schedule/Schedule";
import { ModalProvider } from "./components/Book/Book";
import ModalForm from "./components/ModalForm/ModalForm";
import KyleCarousel from "./components/KyleCarousel/KyleCarousel";
import Merch from "./components/Merch/Merch";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <ModalProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/merchandise" element={<Merch />} />
            <Route path="/book" element={<ModalForm />} />
            <Route path="/meet-kyle" element={<Land />} />
            <Route path="/carousel" element={<KyleCarousel />} />
          </Routes>
          <Footer />
        </ModalProvider>
      </Router>
    </>
  );
}

export default App;
