import React from 'react';

function Hero() {
    return (
   <div className='container-fluid' style={{backgroundColor:"#3060efff",color:"white"}}>
     <div className='row pt-3'> 
         <div className='col-1'></div>
         <div className='col-5 text-center'>
          <h4 className='mb-5'>Support Portal</h4>
          <h3 className='mb-3 fs-5'>Search for an answer or browser help topics 
            to create a ticket
          </h3>
          <input type="search" class="search-bar mb-2"  
          placeholder="Eg: how do i activate F&O, why is my order getting rejected" 
           name="name" > 
          </input>
          <br></br>
          <div className='mb-5'>
              <a className='fs-6' href=''style={{color:"white",marginRight:"7px"}}>Track account opening</a>
          <a className='fs-6' href=''style={{color:"white",marginRight:"7px"}}>Track segment activation</a>
          <a className='fs-6' href=''style={{color:"white",marginRight:"7px"}}>Intraday margins</a>
          <a className='fs-6' href=''style={{color:"white",marginRight:"7px"}}>kite user manual</a> 
          </div>
         </div>
         <div className='col-1'></div>
         <div className='col-5'>
          <a className='mx-5' href=''style={{color:"white"}}>Track Tickets</a>
          <h3 className='fs-4 mt-5 mx-0'>Featured</h3>
          <div className='' style={{marginLeft:"1px"}}>
             <ol>
            <li>current Takeovers and Delisting -January 2024</li>
            <li>Latest Intraday leverages - MIS & C</li>
          </ol>
          </div>
         </div>
     </div>
   </div> );  
}

export default Hero;