import React from "react";
import abimg from "/public/images/about/img-3.png";
import shape from "/public/images/about/shape.png";
import Link from "next/link";
import Image from "next/image";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const About2 = (props) => {
  return (
    <section className="wpo-about-section-s2 section-padding">
      <div className="container">
        <div className="wpo-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-img">
                <Image src={abimg} alt="" />
                <div className="back-shape">
                  <Image src={shape} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="wpo-about-text">
                <div className="wpo-section-title">
                  <small>About Skillora</small>
                  <h2>A New Different Way To Improve Your Skills.</h2>
                </div>
                <p>
                  Education is one of the most essential and valuable assets
                  that an individual can possess. It plays a pivotal role in
                  shaping the future of individuals, societies, and nations. The
                  importance of education cannot be overstated, individuals
                  development of nations.
                </p>
                <p>
                  One of the primary benefits of education is its ability to
                  empower individuals. Through education, individuals acquire
                  knowledge, skills, and enable them to navigate the
                  complexities of life.
                </p>
                <Link
                  onClick={ClickHandler}
                  href="/about"
                  className="theme-btn-s2"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About2;
