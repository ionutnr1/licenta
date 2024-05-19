import React from "react";
import "./Footer.scss"
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="half1">
            <div className="item">
            <h2>Categorii</h2>
            <span>IT</span>
            <span>Design grafic</span>
            <span>Video/Photo editor</span>
            <span>Business</span>
            <span>Frumusete</span>
            <span>Educatie</span>
            <span>Sanatate</span>
            <span>Marketing</span>
            </div>

          <div className="item">
            <h2>Categorii</h2>
            <span>IT</span>
            <span>Design grafic</span>
            <span>Video/Photo editor</span>
            <span>Business</span>
            <span>Frumusete</span>
            <span>Educatie</span>
            <span>Sanatate</span>
            <span>Marketing</span>
          </div>

          <div className="item">
            <h2>Categorii</h2>
            <span>IT</span>
            <span>Design grafic</span>
            <span>Video/Photo editor</span>
            <span>Business</span>
            <span>Frumusete</span>
            <span>Educatie</span>
            <span>Sanatate</span>
            <span>Marketing</span>
          </div>
        </div>
        <hr />
        <div className="half2">
          <div className="stanga">
            <h2>ServUP</h2>
            <span>© ServUp Romania S.R.L</span>
          </div>
          <div className="dreapta">
            <div className="retele">
              <img src="./imagini/twitter.png" alt="X" />
              <img src="./imagini/facebook.png" alt="facebook" />
              <img src="./imagini/instagram.png" alt="instagram" />
              <img src="./imagini/linkedin2.png" alt="linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
