import NavBar from "./components/NavBar/NavBar";
import BackgroundVideo from "./images/waves.mp4";

function App() {
  return (
    <>
      <NavBar />
      <video autoPlay loop muted id="video">
        <source src={BackgroundVideo} type="video/mp4" />
      </video>
    </>
  );
}

export default App;
