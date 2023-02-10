import React from 'react';

import './Chef.css';
import {images} from '../../constants';
import SubHeading from '../../components/SubHeading/SubHeading';
const Chef = () => (
  <div className="app__chef app__bg section__padding">
    <div className="app__chef-img">
      <img src={images.chef} alt="our Chef & Founder Kevin Lou" />
    </div>
    <div className="app__chef-content">
      <div className="app__chef-content-sub">
        <SubHeading title="Chef's Word"/>
      </div>
      <div className="app__chef-content-heading">
        <p className="p__cormorant">What We Believe In</p>
      </div>  
      <div className="app__chef-content-quote">
        <div className="app__chef-content-quote-top">
        <img src={images.quote} alt="quote"/>
        <p className="p__opensans"><em>Lorem ipsum dolor sit amet,</em></p>
        </div>
        <p className="p__opensans"><em> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</em></p>
      </div>
      
      <div className="app__chef-content-signature">
        <p className="p__cormorant">Kevin Luo</p>
        <p className="p__opensans"><em>Chef & Founder</em></p>
        <img src={images.sign} alt="chef's signature"/>
      </div>
     
     
    </div>
  </div>
);

export default Chef;
