/*  ************************************************************************
 * Created by Wontae Han, Alejandro Romero, Shafayat Alam and Jeff Schrock.
 * Copyright © 2018 De-Bux. All rights reserved.
 **************************************************************************/
import React from 'react';

const NavBar = (props) => {
  return (
    <div className = 'navBar'>
      <h1>De-Bux</h1>
      <div class="options">
        <div class="optionbtn">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="options-content">
          <a onClick=''>Toggle Orientation</a>
          <a onClick=''>Display Components Only</a>
          <a onClick=''>Display Store Only</a>
        </div>
  	  </div>
    </div>
  );
};

export default NavBar;