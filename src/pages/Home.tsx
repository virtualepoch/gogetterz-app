import "./home.css";
import { ImageEffectCanvas } from "./ImageEffectCanvas";
import homeImg1 from "../assets/imgs/01.jpg";
import homeImg2 from "../assets/imgs/12.jpg";
import homeImg3 from "../assets/imgs/05.jpg";
import homeImg4 from "../assets/imgs/07.jpg";
import homeImg5 from "../assets/imgs/09.jpg";

export function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to</h1>
      <h1>GoGetterz</h1>
      <ImageEffectCanvas />
      <img src={homeImg1} className="home-img img-1" />
      <img src={homeImg2} className="home-img img-2" />
      <img src={homeImg3} className="home-img img-3" />
      <img src={homeImg4} className="home-img img-4" />
      <img src={homeImg5} className="home-img img-5" />
    </div>
  );
}
