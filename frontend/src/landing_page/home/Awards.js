import React from 'react';

function Awards() {
    return (  
       <div className='container p-5'>  
        <div className='row '>
           <div className='col-lg-6 col-sm-12 p-5 px-0'>   
            <img src='media/images/largestBroker.svg' style={{width:"90%"}}/>
           </div>    
           <div className='col-lg-6 col-sm-11 p-5 m-0'>  
             <h1>largesst stock brokers in india</h1>
             <p className='mb-5'>largesst stock brokers in
                 indialargesst stock brokers
                 in indialargesst stock brokers in india
             </p> 
              <div className='row'>
               <div className='col-6'>   
                <ul>
                    <li><p>future and options</p></li>
                    <li><p>future and options</p></li>
                    <li><p>future and options</p></li>
                </ul>
                </div> 
                 <div className='col-6'>
                <ul>
                    <li><p>future and options</p></li>
                    <li><p>future and options</p></li>
                    <li><p>future and options</p></li>
                </ul>
                </div> 
                    <img src='media/images/pressLogos.png' class='mx-4'/>
              </div>               
           </div>
        </div>
       </div>
     );
} 

export default Awards; 