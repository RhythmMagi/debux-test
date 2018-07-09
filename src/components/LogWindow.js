/*  ************************************************************************
 * Created by Wontae Han, Alejandro Romero, Shafayat Alam and Jeff Schrock.
 * Copyright © 2018 De-Bux. All rights reserved.
 **************************************************************************/
import React from 'react';
import Logs from './Logs';

const LogWindow = (props) => {
//   let logDisplay = props.memory.map((el)=>{
//     return <pre >{el.count}  {JSON.stringify(el.store, undefined, 2)} </pre>
//   });
  return (
    <div className="logWindow">
      Logs:  
      {/* {logDisplay} */}
      <Logs/>
    </div>
  );
};

export default LogWindow;