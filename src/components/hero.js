import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import Cta from './cta';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-copy">
        <h1>
          Kids rewards app
        </h1>
        <p className="value-prop">
        Children earn DooCoins for good behavior, completing chores and personal achievements.
        </p>

        <p className="value-prop">
        Goals are set and DooCoins are redeemed for rewards
        </p>

        <Cta 
          size="big-cta" 
          buttonText="Get started"
          linkTo="/get-started/"
          color="orange"
        />

      </div>
      <div className="hero-image">
        <StaticImage
          src="../images/ipad.jpg"
          width={600}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="DooCoins dashoard"
          style={{ marginBottom: `1.45rem` }}
        />
      </div>
    </div>
  );
};

export default Hero;