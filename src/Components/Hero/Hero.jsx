import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="body-wrapper">

        <div className="hero-left">
            <h1>Saas Landing Page Template</h1>
            <p>This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com</p>
            <button>Get Started</button>
        </div>
        <div className="hero-right">
            <img src="src\Assets\Screenshot.png" alt="" srcset="" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
