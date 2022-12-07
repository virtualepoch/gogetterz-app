import "./home.css";
import { ImageEffectCanvas } from "./ImageEffectCanvas";
import homeImg1 from "../assets/imgs/12.jpg";

export function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <ImageEffectCanvas />
      <img src={homeImg1} className="home-img img-1" />
    </div>
  );
}
