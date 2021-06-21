import React from "react";
import cvPdf from "../../media/cv.pdf";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Alejandro Guamanquispe</h1>
        <p>Ecuador, Guayaquil</p>
        <a className="download" href={cvPdf} download="ALEJANDRO_GUAMANQUISPE">
          DOWNLOAD CV
        </a>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Alejandro</div>
        <div className="sns-links">
          <a
            href="https://www.linkedin.com/in/alejandro-guamanquispe-12374820b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
