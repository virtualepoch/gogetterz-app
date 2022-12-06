import homeImg1 from "../../public/imgs/hoodie_white1_1440.jpg";
import homeImg2 from "../../public/imgs/hoodie_black1.jpg";
import homeImg3 from "../../public/imgs/hoodie_black2.jpg";
import homeImg4 from "../../public/imgs/womens_clothing.jpg";
import homeImg5 from "../../public/imgs/hoodie_black.jpg";

export function Home() {
  return (
    <div className="home-container">
      <h1>Home</h1>
      <img src={homeImg1} width="100%" />
      <img src={homeImg2} width="100%" />
      <img src={homeImg3} width="100%" />
      <img src={homeImg4} width="100%" />
      <img src={homeImg5} width="100%" />
    </div>
  );
}
