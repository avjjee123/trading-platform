import React from 'react';
import {Link} from 'react-router-dom';

function NotFound() { 
    return (
        <div className='container mb-5 mt-5 '> 
           <div className='row'>
            <div > 
               <h1 class='mt-5 text-muted'>404 <br></br>Page Not Found</h1>
              <p className='text-muted'>We couldn’t find the page you were looking for. Visit</p>
            <Link to='/'>
             <button class='btn btn-dark p-2 fs-lg-5 fs-sm-0.5' style={{width:'20%', margin:'0 auto'}}>
               Zerodha’s home page
            </button>
            </Link>
            </div>
           </div>
        </div>
     );
}

export default NotFound;