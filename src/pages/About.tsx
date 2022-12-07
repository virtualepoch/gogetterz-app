import "../pages/pages.css"
import lgLogo from "../assets/logos/gogetterz_01_500.png";

export function About() {
  return (
    <div className="about-container">
      <h1>About</h1>
      <img src={lgLogo} />
    </div>
  );
}
