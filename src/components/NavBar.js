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
        <div onclick="options()" class="optionbtn">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="showoption" class="options-content">
          <a href="#">Toggle Orientation</a>
          <a href="#">Display Components Only</a>
          <a href="#">Display Store Only</a>
        </div>
  	  </div>
    </div>
  );
};

export default NavBar;