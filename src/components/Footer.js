import React from "react";
import footerLogo from "../img2/logo.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <div className="footer-content">
          <div className="container">
            <div className="row gy-4">
              <div className="col-lg-4 col-md-12 footer-info">
                <Link to="/" className="logo d-flex align-items-center">
                  <img src={footerLogo} alt="" title="" />
                </Link>
                <p className="text-white">
                  Pevnost Corporation Pvt. Ltd is dedicated to providing
                  high-quality accounting and tech services. Founded by
                  Chiranjeev Chaturvedi and Vishakha Chaturvedi, we aim to
                  deliver excellence in all our endeavors.
                </p>
              </div>
              <div className="col-lg-2 col-6 footer-links">
                <h4 className="text-white">Useful Links</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <Link to="/" className="text-white">Home</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <Link to="/about" className="text-white">About Us</Link>
                  </li>
                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <Link to="/services" className="text-white">Services</Link>
                  </li>

                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <Link to="/contact" className="text-white">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-6 footer-links">
                <h4 className="text-white">Our Services</h4>
                <ul>
                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <HashLink smooth to="#" className="text-white">
                      Accounting
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <HashLink smooth to="#" className="text-white">
                      Tech Services
                    </HashLink>
                  </li>
                  <li>
                    <i className="bi bi-dash text-white"></i>
                    <HashLink smooth to="#" className="text-white">
                      Financial Audit and Legal Aids
                    </HashLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4 className="text-white">Contact Us</h4>
                <address className="text-white">
                  42 SDX Minal Residency, <br /> Bhopal, Madhya Pradesh, India -
                  462023 <br />
                  <br />
                  <strong>Phone:</strong> +91 9302955692 <br />
                  <strong>Email: </strong>
                  <a href="mailto:pevnostcorporation@gmail.com" className="text-white">
                    pevnostcorporation@gmail.com
                  </a>
                  <br />
                </address>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">{new Date().getFullYear()}</span>
              &copy; Copyright
              <span> Pevnost Corporation Pvt. Ltd</span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
