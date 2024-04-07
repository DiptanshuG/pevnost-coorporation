import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from "react-router-dom";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Carousel() {
  return (
    <div style={{ height: "100vh" }}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        // autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-100 h-100 flex-center-center"
        style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <SwiperSlide className="swiper-slide-with-animation" style={{ background: " url('https://images.unsplash.com/photo-1554224155-3a58922a22c3?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat" }}>
          <div className="slide-content"> <div className="container mt-5 d-flex justify-content-center w-100 h-100" >
            <div
              className="row align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-7 col-md-12 col-12">

                <blockquote data-aos="fade-up" data-aos-delay="100">
                <h2 data-aos="fade-up" className='text-white'>
                  Streamlined accounting, HR, and expert financial/legal services
                  for your business.
                </h2>
                  <p className='color-paragraph'>
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
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-with-animation" style={{ background: "url('https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat" }}>
        <div className="slide-content"> <div className="container mt-5 d-flex justify-content-center w-100 h-100" >
            <div
              className="row align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-7 col-md-12 col-12">

                <blockquote data-aos="fade-up" data-aos-delay="100">
                <h2 data-aos="fade-up" className='text-white'>
                  Streamlined accounting, HR, and expert financial/legal services
                  for your business.
                </h2>
                  <p className='color-paragraph'>
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
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-with-animation" style={{ background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) ,url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat" }}>
        <div className="slide-content"> <div className="container mt-5 d-flex justify-content-center w-100 h-100" >
            <div
              className="row align-items-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="col-lg-7 col-md-12 col-12">

                <blockquote data-aos="fade-up" data-aos-delay="100">
                <h2 data-aos="fade-up" className='text-white'>
                  Streamlined accounting, HR, and expert financial/legal services
                  for your business.
                </h2>
                  <p className='color-paragraph'>
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
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
