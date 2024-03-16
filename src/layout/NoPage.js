import React from "react";
import InnerHeaderBanner from "../components/InnerHeaderBanner";
import InnerHeader from "../components/InnerHeader";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <>
      <InnerHeader />
      <InnerHeaderBanner name={"Page Not Found"}  />

      <main id="main">
        <section id="blog" className="blog text-center">
         <div>
         <img src={""} alt="" title = "404 Error"  className="img-fluid"/>
        </div> 
         <Link to = "/" className="btn btn-primary btn-lg my-3">Back to Home </Link>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default NoPage;
