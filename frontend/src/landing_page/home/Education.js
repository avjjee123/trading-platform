import React from "react";
 
function Education() { 
  return (
    <div className="container p-5">
      <div className="row ">
        <div className="col-lg-6 col-sm-12 p-4 px-0">
          <img src="media/images/largestBroker.svg" style={{ width: "90%" }} />
        </div>
        <div className="col-lg-6 col-sm-11 p-4 m-0">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="text-muted">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            varsity
            <i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mt-4 text-muted mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="mb-3" style={{ textDecoration: "none" }}>
            TradingQ&A
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
