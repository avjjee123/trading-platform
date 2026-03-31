import React from 'react';

function Pricing() {
    return ( <div className='container mb-5 mt-5'> 
        <div class="row">
            <div class="col-lg-5 col-m-5 col-sm-10">
                <h1 className='mb-3'>
                    Unbeatable pricing
                </h1>
                <p>We pioneered the concept of discount broking and price transparency in India.
                 Flat fees and no hidden charges.</p>
                  <a href='' className='mx-4' style={{textDecoration:'none'}}>See Pricing
            <i class="fa-solid fa-arrow-right"></i>
          </a> 
            </div>
            <div className='col-lg-1 col-m-1'></div>
            <div className='col-lg-6 col-m-6 col-sm-10'> 
              <div className='row text-center m-5'>
                  <div className='col border'>
                    <h1 className='fs-1 mb-3'>0</h1>
                    <p>Free account opening</p>
                  </div>
                  <div className='col border'>
                    <h1 className='fs-1 mb-3'>20</h1>
                    <p>Intraday and F&O</p> 
                </div> 
              </div>
            </div>
        </div>
    </div>);
} 

export default Pricing;