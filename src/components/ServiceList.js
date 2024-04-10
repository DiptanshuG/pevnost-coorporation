import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = ({ iconClass, iconColor, title, description, link }) => {
  return (
    <div className="col-lg-6 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
      <div className="single-service">
        <div className="icon flex-shrink-0">
          <i className={iconClass} style={{ color: iconColor }}></i>
        </div>
        <div>
          <h4 className="title">
            <Link to={link} className="stretched-link">
              {title}
            </Link>
          </h4>
          <p className="description">{description}</p>
          <Link to={link} className="btn-get-started">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

const ServiceList = () => {
  const services = [
    {
      iconClass: "bi bi-laptop",
      iconColor: "#f57813",
      title: "Website Design",
      description: "We provide professional website design services tailored to your business needs. Our designs are modern, user-friendly, and aimed at enhancing your online presence and engagement.",
      link: "/services"
    },
    {
      iconClass: "bi bi-calculator",
      iconColor: "#15a04a",
      title: "Accounting Services",
      description: "Our accounting services offer comprehensive solutions to manage your financial operations effectively. From bookkeeping to financial analysis, we ensure accurate and timely accounting services to optimize your business performance.",
      link: "/services"
    },
    {
      iconClass: "bi bi-people",
      iconColor: "#0d6efd",
      title: "HR Solutions",
      description: "Our HR solutions are designed to streamline your human resources management processes. From recruitment to employee relations, we provide comprehensive HR services to support your business objectives.",
      link: "/services"
    },
    {
      iconClass: "bi bi-globe",
      iconColor: "#386fa4",
      title: "Digital Marketing", 
      description: "Our digital marketing services help you reach your target audience effectively through various online channels, including SEO, social media, email marketing, and more.",
      link: "/services/digital-marketing" 
    }
  ];

  return (
    <section id="services-list" className="services-list">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>What we do? </h2>
          <p>We specialize in providing cutting-edge technology server solutions, comprehensive accounting services, and HR solutions tailored to your needs.</p>
        </div>
        <div className="row gy-5">
          {services.map((service, index) => (
            <ServiceItem key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceList;
