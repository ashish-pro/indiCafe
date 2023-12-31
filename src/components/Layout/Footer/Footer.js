import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
   
  return (
    <footer className="footer">
    <div className="container">
      <div className="row justify-content-center flex-wrap">

        <section className="col-12 col-md-4 footer-column">
          <p>indiCaf&eacute; - A Food Delivery Startup</p>
          <p>Copyright &copy; 2023</p>
        </section>
        <section className="col-12 col-md-4 footer-column">
          <ul>
            <li><a href="/delivery">Delivery Policy</a></li>
            <li><a href="/returns">Returns </a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </section>
        <section className="col-12 col-md-4 footer-column">

          <div>
            <a href="https://github.com/ashish-pro">
              <FontAwesomeIcon icon={faGithub} size="2x" />

            </a>
            <a href="/fb#">
              <FontAwesomeIcon icon={faFacebook} size="2x" />

            </a>
            <a href="/twt#">
              <FontAwesomeIcon icon={faTwitter} size="2x" />

            </a>
            <a href="https://www.linkedin.com/in/ashu09/">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />

            </a>
          </div>
        </section>
      </div>
    </div>

  </footer>
  )
}

export default Footer;
