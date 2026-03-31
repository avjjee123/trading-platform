import React from 'react';
import OpenAccount from '../OpenAccount';
import Footer from '../Footer';
import Navbar from '../Navbar';
import Hero from './Hero';
import Pricing from './Pricing';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';


function HomePage() {
    return (
        <>
        <Hero/> 
        <Awards/>
         <Stats/>
          <Pricing/>
        <Education/>  
        <OpenAccount/>
        </>
    )
}

export default HomePage;