import React from "react";
import { Link } from "react-router-dom";


const Revenue = () => {
  return (
    <>
      <section id="features" className="features">
        <div className="details">
          <div className="container" data-aos="fade-up" data-aos-delay="300">
            <div className="row">
              <div className="col-md-7">
                <h4>Drive revenue and optimise your Business</h4>
                <p>
                  Tailored Solutions: We recognize that every client is unique,
                  and we prioritize understanding your specific needs and goals.
                  Our customized approach ensures that our services align
                  perfectly with your requirements.
                </p>
                <p>
                  {" "}
                  Our abreast technology trends and unabating innovation has
                  always enhanced the business impact for our clients resulting
                  in happy faces seeing the revenue graph.
                </p>
               
                <Link to="/about" className="btn-get-started">
                  Read More
                </Link>
              </div>
              <div
                className="col-lg-5 position-relative"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="phone-wrap">
                  <img src={""} alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Revenue;
