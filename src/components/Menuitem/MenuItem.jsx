import React from 'react';

import './MenuItem.css';

const MenuItem = (props) => (
  <div className="app__menuItem">
    <div className="app__menuItem-content">
      <div className="app__menuItem-title">
      <p className="p__cormorant">{props.title}</p>
      </div>

   
  
   
    <div className="app__menuItem-spacer"/>
   
    <div className="app__menuItem-price">
      <p className="p__cormorant">{props.price}</p>
    </div>
    </div>
    <div className="app_menuItem-tags">
      <p className="p__opensans">{props.tags}</p>
      </div>
   
  </div>
);

export default MenuItem;
