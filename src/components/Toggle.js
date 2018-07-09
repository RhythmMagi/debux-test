/*  ************************************************************************
 * Created by Wontae Han, Alejandro Romero, Shafayat Alam and Jeff Schrock.
 * Copyright © 2018 De-Bux. All rights reserved.
 **************************************************************************/
import React from 'react';
import DropDown from './DropDown';
import ExpandToggle from './ExpandToggle';


const Toggle = (props) => {
  return (
    <div className='toggle'>
      {/* <ExpandToggle/> */}
      <span>{props.treeType}</span>
      <DropDown dropDownHandleClick={props.dropDownHandleClick}/>
    </div>
  );
};

export default Toggle;