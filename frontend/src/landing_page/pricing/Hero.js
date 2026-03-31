import React from "react";

function Hero() {
  return (
    <div className="container-fluid mt-5 p-5 text-center pt-4 mb-5">
      <div className="row mb-5">
        <h2 className="" style={{ lineHeight: "1.5" }}>
          Charges
        </h2>
        <h3 className="text-muted fs-4">list of all charges and taxes</h3>
      </div>
      <div className="row text-center px-0 px-lg-5 mt-5 pt-5">   
        <div className="col-4 px-0 px-lg-5" style={{padding:"0% 5%"}}>
          <img src="media\images\pricingEquity.svg" style={{width:"95%"}}></img>
          <h1 className="mt-2 fs-2">Free equity delivery</h1>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 px-0 px-lg-5" style={{padding:"0% 5%"}}>
          <img src="media\images\intradayTrades.svg" style={{width:"95%"}}></img>
          <h1 className="mt-2 fs-2">Intraday and F&O trades</h1>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 px-0 px-lg-5" style={{padding:"0% 5%"}}>
          <img src="media\images\pricingEquity.svg" style={{width:"95%"}}></img>
          <h1 className="mt-2 fs-2">Free direct MF</h1>
          <p className="text-muted"> 
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
