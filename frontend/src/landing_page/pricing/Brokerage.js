import React from 'react';

function Brokerage() {
    return (
  <div className='container border-top mt-5'>
    <div className='row mt-5'>
        <div className='col-8 text-center pri-btn-cl'>
            <a style={{textDecoration:"none"}}>Brokerage calculator</a>
        </div>
        <div className='col-4 text-center pri-btn-cl'>
           <a style={{textDecoration:"none"}}>List of charges</a>
        </div>
    </div>
    <div className='row mt-5'> 
       <div className='col-8'>
         <ul>
             <li  className='' style={{lineHeight:"1.8",fontSize:"1rem"}}>
            call & Trade and RMS auto-squareoff: Additional charges of ruppes50 + GST per order.
          </li>
           <li className='' style={{lineHeight:"1.8", fontSize:"1rem"}}>                    
            Digital contact notes will be sent via e-mail.
           </li>
           <li className='' style={{lineHeight:"1.8", fontSize:"1rem"}}>
            physical copies of contact notes, if required, shall be charged ruppes20 per contact notes. courier charges apply.
           </li>
           <li className='' style={{lineHeight:"1.8", fontSize:"1rem"}}>
             For NRI account (non-PIS),0.5% or rupess100 per executed order for equity (whichever is lower).
          </li>
           <li className='' style={{lineHeight:"1.8",fontSize:"1rem" }}>
             For NRI account (PIS),0.5% or ruppes200 per executed for equity (whichever is lower).
          </li>
           <li className='' style={{lineHeight:"1.8",fontSize:"1rem" }}>
            If the account is in debit balance, any order placed will be charged ruppes40 per executed order instead of ruppes20 per executed order.
          </li>
         </ul> 
       </div>
       <div className='col-4'></div>     
    </div>
  </div> );
}

export default Brokerage;