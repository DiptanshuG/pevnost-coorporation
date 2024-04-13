import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";

const Service = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Services"} img="" />

      <main id="main">
        <section id="services-list" className="services-list">
          <div className="container" data-aos="fade-up">
            <div className="section-header">
              <h3 style={{ font: "bold" }}>
                We are{" "}
                <span style={{ color: "#155bd5" }}>Pevnost Corporation</span>,
                provides services across accounting,
                tech services (website design, digital marketing), and
                financial audit and legal aid.
              </h3>
            </div>

            <div
              className="row gy-5 pt-5 align-items-center"
              id="Educational-content"
            >
              <div
                className="col-lg-5 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img
                  src={""}
                  className="img-fluid"
                  alt=""
                  title="Educational-content"
                />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon flex-shrink-0">
                  <i className="bi bi-book" style={{ color: "#f57813" }}></i>
                </div>
                <div>
                  <h4 className="title"> Accounting </h4>
                  <p className="description">
                    Our accounting services cover a range of software platforms
                    including SAP - FICO, BAAN, ISCALA, CMS, ORACAL, and Tally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-collection-play"
                    style={{ color: "#15a04a" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Tech Services </h4>
                  <p className="description">
                    Our tech services include website and App solutions tailored
                    to your needs.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={""} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="services-list ">
          <div className="container" id="Games">
            <div className="row gy-5  align-items-center">
              <div
                className="col-lg-5 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={""} className="img-fluid" alt="" />
              </div>

              <div
                className="col-lg-7 col-md-6 service-item"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="icon flex-shrink-0">
                  <i
                    className="bi bi-controller"
                    style={{ color: "#f5cf13" }}
                  ></i>
                </div>
                <div>
                  <h4 className="title"> Financial Audit and Legal Aids </h4>
                  <p className="description">
                    Our services extend to financial audit and legal aid,
                    ensuring comprehensive support for your business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-list light-bg" id="Entertainment-content">
          <div className="container" data-aos="fade-up">
            <div className="row gy-5 align-items-center ">
              <div
                className="col-lg-7 col-md-6 service-item "
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon flex-shrink-0">
                <i className="bi bi-people" style={{ color: "#d513a0" }}></i>

                </div>
                <div>
                  <h4 className="title"> Consultancy Services </h4>
                  <p className="description">
                    Our consultancy services provide expert guidance and advice
                    to help your business thrive in various aspects.
                  </p>
                </div>
              </div>

              <div
                className="col-lg-5 col-md-6 service-item order-first order-sm-last"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src={""} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Service;
