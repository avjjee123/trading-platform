import React from "react";
import { Link } from "react-router-dom";
//we use Link for router links 
//we use 'a'tab for external links
function Hero() {
  return (
    <div className="container-fluid" style={{padding:"2% 10%"}}> 
      <div className="row m-5"> 
        <h2 className=" text-muted text-center" style={{padding:"5% 15%"}}>
          We pioneered the discount broking model in India. Now, we are breaking
          ground with our technology.
        </h2>
      </div>
      <hr></hr>
      <div className="row mt-5 text-muted m-2"style={{padding:"5% 10%",lineHeight:"1.4",fontSize:"1.1rem",fontStyle:"italic"}}>
        <div className="col">
          <p className="mb-2">
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p className="mb-2">
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p className="mb-2">
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col">
          <p className="mb-2">
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p className="mb-2">
            <Link to="/" style={{textDecoration:"none"}}>Rainmatter</Link>, our fintech fund and incubator, has
            invested in several fintech startups with the goal of growing the
            Indian capital markets.
          </p>
          <p className="mb-2">
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our <Link to="/" style={{textDecoration:"none"}}>blog</Link> or see what the
            media is <Link to="/" style={{textDecoration:"none"}}>saying about us</Link> or learn more about our
            business and product <Link to="/" style={{textDecoration:"none"}}>philosophies</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
