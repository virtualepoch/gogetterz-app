import "./pages.css";
import { ImageEffectCanvas } from "./ImageEffectCanvas";
import homeImg1 from "../assets/imgs/01.jpg";
import homeImg2 from "../assets/imgs/12.jpg";
import homeImg3 from "../assets/imgs/05.jpg";
import homeImg4 from "../assets/imgs/07.jpg";
import homeImg5 from "../assets/imgs/09.jpg";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="home-container">
      <h1 style={{ font: "400 clamp(1.5rem, 5vw, 2.5rem) sans-serif", zIndex: "3" }}>Welcome to</h1>
      <div className="header-container">
        <h1 className="home-header-g">g</h1>
        <h1 className="home-header">o</h1>
        <h1 className="home-header-g">g</h1>
        <h1 className="home-header">etterz</h1>
      </div>
      <ImageEffectCanvas />
      <div className="img-stack-container">
        <img src={homeImg1} className="home-img img-1" />
        <img src={homeImg2} className="home-img img-2" />
        <img src={homeImg3} className="home-img img-3" />
        <img src={homeImg4} className="home-img img-4" />
        <img src={homeImg5} className="home-img img-5" />
      </div>

      <Link to="/store" className="store-btn">
        VIEW MERCH
      </Link>
    </div>
  );
}
