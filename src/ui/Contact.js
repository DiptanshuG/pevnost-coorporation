import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Contact Us"} img={""} />
      <main id="main">
        <section id="contact" className="contact" style={{ backgroundColor: "#ffffff" }}>
          <div className="container position-relative" data-aos="fade-up">
            <div className="section-header">
              <h2 style={{ color: "#2b180d" }}>Let's Have a Talk</h2>
            </div>

            <div className="row gy-4">
              <div className="col-12" data-aos="fade-up" data-aos-delay="100">
                <div className="info-item d-flex flex-column flex-lg-row justify-content-lg-between">
                  <div>
                    <i className="bi bi-geo-alt" style={{ color: "#2b180d", background:"#905E26" }}></i>
                    <div>
                      <h4 style={{ color: "#2b180d" }}>Location:</h4>
                      <h5 style={{ color: "#2b180d" }}>Address:</h5>
                      <p style={{ color: "#2b180d" }}>42 SDX Minal Residency, Bhopal, Madhya Pradesh, India - 462023</p>
                    </div>
                  </div>
                  
                  <div>
                    <i className="bi bi-envelope" style={{ color: "#2b180d" ,background:"#905E26" }}></i>
                    <div>
                      <h4 style={{ color: "#2b180d" }}>Email:</h4>
                      <p style={{ color: "#2b180d" }}><a href="mailto:pevnostcorporation@gmail.com" style={{ color: "#2b180d" }}>pevnostcorporation@gmail.com</a></p>
                    </div>
                  </div>
                  
                  <div>
                    <i className="bi bi-phone" style={{ color: "#2b180d",background:"#905E26"  }}></i>
                    <div>
                      <h4 style={{ color: "#2b180d" }}>Mobile:</h4>
                      <p style={{ color: "#2b180d" }}>+91 9302955692</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
