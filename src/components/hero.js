import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
// import Cta from './cta';
import './hero.css'

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-copy">
        <h1>
          Kids rewards app - Coming soon!
        </h1>
        <p className="value-prop">
        Children earn DooCoins for good behavior, completing chores and personal achievements, goals are set and DooCoins are redeemed for rewards. 
        </p>

        <p className="value-prop">
        Built on blockchain technology, a new generation of decetralized app providing privacy, security and speed. Become an early adopter and help shape the future of DooCoins.
        </p>

        {/* <Cta 
          size="big-cta" 
          buttonText="Get early access"
          linkTo="https://www.doo.co"
          color="orange"
        /> */}

      <form action="https://formspree.io/f/xnqlbvlb" method="POST">
        <input type="email" className="input-early-access" placeholder="your email" name="_replyto" required />
        <button type="submit" className="cta-early-access">Get early access</button>
      </form>

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