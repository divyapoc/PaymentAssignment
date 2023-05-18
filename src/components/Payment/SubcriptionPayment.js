import React, { useState } from "react";
import "./Payment.css";
import { ReactComponent as LimitedOffer } from "../../assets/icons/limitedoffer.svg";
import { ReactComponent as Razorpay } from "../../assets/icons/razorpayicon.svg";
// Array of subscription price data
const paymentdata = [
  {
    totalamount: 99,
    perMonthfee: 8,
    subscriptionMonth: "12 Months Subscription",
    Pricestatus: false,
    offerprice: 18401,
    expirestatus: true,
    statusmsg: "Offer expired",
  },
  {
    totalamount: 179,
    perMonthfee: 15,
    subscriptionMonth: "12 Months Subscription",
    Pricestatus: true,
    offerprice: 18401,
    subscriptionstatus: true,
    expirestatus: false,
    statusmsg: "Recommended",
  },
  {
    totalamount: 149,
    perMonthfee: 25,
    subscriptionMonth: "6 Months Subscription",
    Pricestatus: true,
    offerprice: 0,
    subscriptionstatus: false,
    expirestatus: false,
  },
  {
    totalamount: 99,
    perMonthfee: 33,
    subscriptionMonth: "3 Months Subscription",
    Pricestatus: true,
    expirestatus: false,
    offerprice: 0,
    subscriptionstatus: false,
  },
];

const SubcriptionPayment = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  // onclick selection function
  const handleOnSelection = (price, offer) => {
    const gst = 18 / 100;
    const subscriptionAmount = 18500;
    console.log(gst, "gst");
    // total amount calculation
    if (offer !== 0) {
      const total =
        subscriptionAmount +
        price -
        offer +
        (subscriptionAmount + price - offer) * gst;
      setTotalAmount(total);
    } else {
      const total = subscriptionAmount + (subscriptionAmount + price) * gst;
      setTotalAmount(total);
    }
  };

  //handle payment
  const handlePayment = () => {
    alert("payment success");
  };
  return (
    <div className="Subcription-box">
      <div className="tab-menu-class">
        <div className="tab-item-class">
          <p className="tab-btn-cls">1</p>
          <p className="tab-text">Signup</p>
        </div>
        <div className="tab-item-class">
          <p className="tab-btn-cls">2</p>
          <p className="tab-text">Subscribe</p>
        </div>
      </div>
      <h2 className="cls-heading">Select your subcription plan</h2>

      <div className="payment-container">
        {paymentdata.map((data, i) => (
          <>
            <button
              key={i}
              className="subscription-btn-class"
              disabled={!data.Pricestatus}
              onClick={() =>
                handleOnSelection(data.totalamount, data.offerprice)
              }
            >
              {data.expirestatus && (
                <div className="expire-tag-cls" key={i}>
                  {data.statusmsg}
                </div>
              )}
              {data.subscriptionstatus && (
                <div className="sub-tag-cls" key={i}>
                  {data.statusmsg}
                </div>
              )}
              <span className="button-container">
                <span className="status-text">
                  {/* className="subscription-status-circle" */}
                  <div
                    className={
                      data.Pricestatus
                        ? "subscription-status-circle"
                        : "subscription-disable-circle"
                    }
                  ></div>
                  {/* <input type="radio" name="choice" value="A" id="a" /> */}
                  <span className="subscription-text-cls">
                    {data.subscriptionMonth}
                  </span>
                </span>
                <span className="class-total-month">
                  <span>
                    Total&nbsp;
                    <span className="class-total-text">
                      &#x20B9;{data.totalamount}
                    </span>
                  </span>
                  <span>{data.perMonthfee} / mo</span>
                </span>
              </span>
            </button>
          </>
        ))}
      </div>
      <div className="subscription-fee-text-box">
        <div className="subscription-div">
          <p className="subscription-fee-text-cls">Subscription Fee</p>
          <p className="subscription-fee-text-amount"> &#x20B9;18,500</p>
        </div>
        <div className="offfer-container">
          <div className="offer-container-box">
            <p className="limited-offer-text">Limited time offer</p>
            <p className="deduction-amount">-&#x20B9;18,401</p>
          </div>
          <div>
            <div>
              <LimitedOffer className="limited-time-icon" />
              <p className="offer-date-icon">
                Offer valid till 25th March 2023{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="subscription-div total-div">
          <p className="subscription-fee-text-cls total-div-text">
            Total (Incl. 18% of GST)
          </p>
          <p className="subscription-fee-text-amount"> &#x20B9;{totalAmount}</p>
        </div>
      </div>
      <div className="button-container">
        <button className="cancle-btn button">CANCEL</button>
        <button className="pay-btn button" onClick={handlePayment}>
          PROCEED TO PAY
        </button>
      </div>
      <div>
        <Razorpay className="razor-pay" />
      </div>
    </div>
  );
};

export default SubcriptionPayment;
