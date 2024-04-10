import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Contact = () => {
  const infoItems = [
    {
      iconClass: "bi bi-geo-alt",
      background: "#905E26",
      title: "Location:",
      text: "42 SDX Minal Residency, Bhopal, Madhya Pradesh, India - 462023",
    },
    {
      iconClass: "bi bi-envelope",
      background: "#905E26",
      title: "Email:",
      text: <a href="mailto:pevnostcorporation@gmail.com">pevnostcorporation@gmail.com</a>,
    },
    {
      iconClass: "bi bi-phone",
      background: "#905E26",
      title: "Mobile:",
      text: "+91 9302955692",
    },
  ];

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
              {infoItems.map((item, index) => (
                <div key={index} className="col-12" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                  <div className="info-item d-flex flex-column flex-lg-row justify-content-lg-between">
                    <div>
                      <i className={item.iconClass} style={{ color: "white", background: item.background }}></i>
                      <div>
                        <h4 style={{ color: "#2b180d" }} className="my-2">{item.title}</h4>
                        <p style={{ color: "#2b180d" }}>{item.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: "30px", color: "#2b180d" }}>
              <p>
                Thank you for your interest in our company and services. We are happy to help. Please reach out to us, and we will ensure to deliver an optimized solution based on your business needs.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
