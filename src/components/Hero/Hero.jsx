import "./index.css";
import hero from "../../assets/images/hero.png";
const Hero = () => {
  return (
    <>
      <div className="hero">
        <div className="info">
          <article>
            <h3 className="desc-title">
              Better Solutions For Your <br /> Business
            </h3>
            <p className="description">
              We are team of talented designers making websites with <br />
              Bootstrap
            </p>
          </article>
          <div className="cta">
            <a href="" className="button cta-link">
              Get Started
            </a>
            <a href="" className="cta-link">
              Watch Video
            </a>
          </div>
        </div>
        <div className="images">
          <figure>
            <img src={hero} alt="Hero Image" className="img-hero" />
          </figure>
        </div>
      </div>
    </>
  );
};

export default Hero;
