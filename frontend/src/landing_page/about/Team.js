import React from 'react';


function Team() {
    return ( 
    <div class="container-fluid mb-5">  
     <div className='row' style={{padding:"0.5% 10%"}}>
        <h2 className='text-center mb-5' style={{fontSize:"1.9rem"}}>people</h2>
        <div className='col-5 text-center'>
            <img src="media/images/nithinKamath.jpg" style={{width:"250px",borderRadius:"50%"}}></img>
            <p className='fs-5'>Nitin Kamath</p>
            <p className='text-muted fs-6'>Founder, CEO</p> 
        </div>
        <div className='col-6 text-muted'> 
            <p className='mb-2' style={{lineHeight:'1.4',fontSize:"1.2rem"}}>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className='mb-2' style={{lineHeight:'1.4',fontSize:"1.2rem"}}>
                He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
             <p className='mb-2' style={{lineHeight:'1.4',fontSize:"1.2rem"}}>
               Playing basketball is his zen.
                  </p>
            <p style={{lineHeight:'1.4',fontSize:"1.2rem"}} >
                connect on <a href="/" style={{textDecoration:"none"}}>Homepage</a> / <a href="/" style={{textDecoration:"none"}}>TradingQnA</a> / <a href="/" style={{textDecoration:"none"}}>Twitter</a>
            </p>
        </div>
     </div>
    </div>
    );      
}

export default Team;      