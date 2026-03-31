import React from 'react';
import {Link} from 'react-router-dom'; 

function RightSection({
      imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore, 
}) {
    return ( <div className='container mt-5 mb-5' >
       <div className='row'>
           <div className='col-lg-6 col-sm-11 order-2 order-lg-1 pt-lg-5'>  
            <h3 className='mb-3 fs-2'>{productName}</h3>
            <p className='text-muted' style={{lineHeight:"1.4",fontSize:"1.2rem"}}>
              {productDescription}
            </p>
            <Link to={tryDemo} style={{textDecoration:"none",textAlign:"center"}} >Try demo <i class="fa-solid fa-arrow-right"></i></Link>
            <Link to={learnMore} style={{textDecoration:"none",textAlign:"center"}}>Try demo <i class="fa-solid fa-arrow-right"></i></Link>
           </div>  
            <div className='col-lg-6 col-sm-11 order-1 order-lg-2'> 
             <img src={imageURL} style={{width:'90%'}}></img>
           </div>
       </div>
    </div> );
}

export default RightSection;