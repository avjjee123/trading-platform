import React from 'react';
import {Link} from "react-router-dom";
function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore, 
}) {
    return ( <div className='container mt-5 mb-5' >
       <div className='row'>
           <div className='col-sm-11 col-lg-6'>
             <img src={imageURL} style={{width:'80%'}}></img>
           </div>      
           <div className='col-sm-11 col-lg-6 pt-lg-5'>   
            <h3 className='mb-3 fs-2'>{productName}</h3>
            <p className='mb-3 text-muted' style={{lineHeight:"1.4",fontSize:"1.2rem"}}>
              {productDescription}
            </p>
            <div className='text-align mb-3'>
            <Link to={tryDemo} className='mx-2' style={{textDecoration:"none",textAlign:"center"}} >Try demo <i class="fa-solid fa-arrow-right"></i></Link>
            <Link to={learnMore} style={{textDecoration:"none",textAlign:"center"}}>learn more <i class="fa-solid fa-arrow-right"></i></Link>
            </div>      
           <div className='text-align '> 
            <Link to={googlePlay} className='mx-4'><img src="media/images/googlePlayBadge.svg"></img></Link>
             <Link to={appStore}><img src="media\images\appstoreBadge (1).svg"></img></Link>
            </div>
           </div>
       </div> 
       
    </div> );
}

export default LeftSection;