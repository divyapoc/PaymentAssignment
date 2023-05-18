import React from "react";
import "./Payment.css";
import Navbar from "../Navbar/Navbar";
import SubcriptionPayment from "./SubcriptionPayment";
import background from "../../assets/backgroundImage/Background.png";
import { ReactComponent as JobcourseIcon } from "../../assets/icons/Jobcourseicon.svg";
import { ReactComponent as ClockIcon } from "../../assets/icons/clockicon.svg";
import { ReactComponent as LiveIcon } from "../../assets/icons/liveicon.svg";
import { ReactComponent as Scholarship } from "../../assets/icons/scholarshipicon.svg";
import { ReactComponent as AdfreeIcon } from "../../assets/icons/adfreeicon.svg";
const Payment = () => {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <div
        className="payment-page-box"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="row">
          <div className="col-md-7 col-xs-12">
            <div className="couse-detail-box">
              <h2 className="detail-heading">
                Access curated courses worth <br />
                <span className="payment-detail-offer">
                  &#x20B9; <span className="strike-color"> 18,500</span>
                </span>{" "}
                at just
                <span className="payment-detail-offer offer-price ">
                  {" "}
                  &#x20B9; 99
                </span>{" "}
                per year!
              </h2>
              <div className="detail-text-box">
                <JobcourseIcon className="detail-icon" />
                <p>
                  <span className="course-detail-span">100&#x2b;</span> Job
                  relevant courses{" "}
                </p>
              </div>
              <div className="detail-text-box">
                <ClockIcon className="detail-icon" />
                <p>
                  <span className="course-detail-span">20,000&#x2b;</span> Job
                  relevant courses{" "}
                </p>
              </div>
              <div className="detail-text-box">
                <LiveIcon className="detail-icon" />
                <p>
                  <span className="course-detail-span">Exclusive</span> webinar
                  access{" "}
                </p>
              </div>
              <div className="detail-text-box">
                <Scholarship className="detail-icon" />
                <p>
                  Scholarship worth{" "}
                  <span className="course-detail-span"> &#x2b;94,500 </span>
                </p>
              </div>
              <div className="detail-text-box">
                <AdfreeIcon className="detail-icon" />
                <p>
                  <span className="course-detail-span">Ad Free</span> learning
                  experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-xs-12">
            <SubcriptionPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
