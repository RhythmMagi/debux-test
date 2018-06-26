import React from 'react';
import Toggle from './Toggle'

const ChartWindow = (props) => {
    return (
        <div className="chartWindow">
            <Toggle treeType={props.treeType} treeData={props.treeData}/>
        </div>
    );
};

export default ChartWindow;