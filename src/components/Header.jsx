import React from "react";
import studyGirl from "../images/study.png";
function Header() {
  return (
    <div className="header">
      <div className="container d-flex align-items-center">
        <div className="row gx-0 gy-0">
          <div
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            className="col-md-6 order-1 order-md-2 mt-5 mt-md-0 "
          >
            <img
              className="girl-img img-fluid"
              src={studyGirl}
              alt="study-girl"
            />
          </div>
          <div
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            className="col-md-6 order-2 order-md-1 d-flex align-items-center"
          >
            <div className="w-70">
              <h1>
                The true <span>Entrepreneur</span> is a doer, not a dreamer.
              </h1>
              <p clssname="my-5">
                IT'S NOT ABOUT IDEAS IT'S ABOUT MAKING IDEAS HAPPEN. Ecell helps
                student entrepreneurial in every work <br />
                that they do.
              </p>
              <button className="my-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
