import React from "react";
import "./Footer.scss"
import { Link } from "react-router-dom";
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
            <h2>Adresa</h2>
            <span>Localitate: Cluj-Napoca</span>
            <span>Judet: Cluj</span>
            <Link to="https://www.google.com/maps/place/Calea+Doroban%C8%9Bilor+5,+Cluj-Napoca+400394/@46.7713965,23.5963624,597m/data=!3m2!1e3!4b1!4m6!3m5!1s0x47490c2153497981:0x64862e1754e0bf42!8m2!3d46.7713929!4d23.5989373!16s%2Fg%2F11cs8g0q6g?hl=ro&entry=ttu">Strada: Dorobantilor nr.5</Link>
            <span>Business</span>
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
