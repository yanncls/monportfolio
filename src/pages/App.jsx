import "../styles/App.scss";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Button from "../components/Button/Button";

function App() {
  const planet = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: planet.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./gum-planet.json"),
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p className="welcome">Bienvenue sur mon portfolio</p>
        <div className="planet" ref={planet}></div>
        <Link to="/home" className="home-link">
          <Button />
        </Link>
        <div className="foot">
          <Footer />
        </div>
      </header>
    </div>
  );
}

export default App;
