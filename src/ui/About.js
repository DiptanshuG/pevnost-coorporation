import React, { useEffect } from "react";
import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import vishakha from "../img2/founder1.png";
import chiranjeev from "../img2/founded2.png";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"About Us"} img={""} />

      <main id="main">
        <section id="about" className="about">
          <div className="container" data-aos="fade-up"></div>

          <div
            id="vision"
            className="vision aos-init"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="container">
              <div className="row gy-4">
                <div className="col-lg-6 aos-init">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-12 m-2">
                        <div className="card-body">
                          <h4 className="card-title">Accounting Services</h4>
                          <p>
                            We specialize in a wide range of accounting
                            services, including SAP - FICO, BAAN, ISCALA, CMS,
                            ORACAL, and Tally, ensuring meticulous financial
                            management for our clients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 aos-init">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card-body">
                          <h4 className="card-title">Tech Services</h4>
                          <p>
                            Our tech services encompass website design and
                            digital marketing solutions, providing innovative
                            and effective online strategies to enhance your
                            digital presence.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row gy-4">
                <div
                  className="col-lg-6 aos-init"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card-body">
                          <h4 className="card-title">
                            Financial Audit and Legal Aids
                          </h4>
                          <p>
                            Additionally, we offer comprehensive financial audit
                            and legal aid services, ensuring regulatory
                            compliance and providing invaluable support to our
                            clients in navigating legal complexities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 aos-init">
                  <div className="card-item">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="card-body">
                          <h4 className="card-title">Consulting Services</h4>
                          <p>
                            Our consulting services cover a wide range of areas
                            including digital marketing, HR, and more. We offer
                            tailored solutions to meet your specific business
                            needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="management"
          className="management light-bg aos-init"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="container">
            <div className="section-header">
              <h2>Founders</h2>
              <p>
                Pevnost Corporation was founded by Chiranjeev Chaturvedi and
                Vishakha Chaturvedi, leveraging their extensive experience in
                the telecom and IT industries. The leadership team is committed
                to meeting and exceeding customer expectations with innovative
                solutions and unmatched services.
              </p>
            </div>
            <div className="row member d-flex align-items-center ">
              <div className="col-md-2">
                <div className="pic">
                  <img
                    src={chiranjeev}
                    className="img-fluid"
                    alt="Chiranjeev Chaturvedi"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>Chiranjeev Chaturvedi</h4>
                  <span>Founder & Director</span>
                  <p>
                    Chiranjeev brings extensive expertise in accounting and
                    finance. With 8+ years of experience in leading accounting
                    for high profile companies, he ensures the highest standards
                    in financial management and consulting services for HR,
                    website design and digital marketing.
                  </p>
                </div>
              </div>
            </div>
            <div className="row member d-flex align-items-center mt-4">
              <div className="col-md-2">
                <div className="pic">
                  <img
                    src={vishakha}
                    className="img-fluid"
                    alt="Vishakha Chaturvedi"
                  />
                </div>
              </div>
              <div className="col-md-10">
                <div className="member-info">
                  <h4>Vishakha Chaturvedi</h4>
                  <span>Co-founder</span>

                  <p>
                    Vishakha brings 5+ years of experience in accounting and
                    helps lead finances for the firm. She brings unwavering
                    dedication to client satisfaction align with expertise and
                    set of accounting tools.
                  </p>
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

export default About;
