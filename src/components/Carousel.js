import React, { useState } from "react";

import { Link } from "react-router-dom";
import "../../node_modules/react-modal-video/css/modal-video.css";

const Carousel = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section id="hero" className="hero d-flex">
        {/* <img className="shape" src={""} alt="#" /> */}
        <div className="container mt-5">
          <div
            className="row align-items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-7 col-md-12 col-12">
              <h2 data-aos="fade-up">
                Streamlined accounting and expert financial/legal services for
                your business.{" "}
              </h2>
              <blockquote data-aos="fade-up" data-aos-delay="100">
                <p>
                  At <strong className="">Pevnost</strong>, we understand the
                  intricate dynamics of managing finances and navigating legal
                  complexities. Whether you're a budding entrepreneur, a
                  seasoned business owner, or an individual seeking sound
                  financial advice, our comprehensive suite of services is
                  tailored to meet your unique needs.
                </p>
              </blockquote>
              <div className="d-flex align-items-center">
                <Link to="/about" className="btn-get-started">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Carousel;
