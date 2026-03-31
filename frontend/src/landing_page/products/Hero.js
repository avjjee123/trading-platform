import React from 'react';

function Hero() {
    return (<div class='container-fluid mt-4 mb-5 '>
       <div class='row text-center' style={{padding:"5% 15%"}}>
         <h2 class="mt-5 fs-3">
             Zerodha Products
         </h2>
         <h4 className='mb-3 fs-4 text-muted'>
            Sleek, modern, and intuitive trading platforms
         </h4>
         <p className='mb-4'>Check out our <a src="/"style={{textDecoration:"none",letterSpacing:"1.4"}}> investment offerings</a> →</p>
       </div>
       <hr></hr> 
    </div> );
}

export default Hero;