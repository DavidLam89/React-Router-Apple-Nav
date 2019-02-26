import React from 'react';
import './SubNav.css';
import SubNav from './SubNav';

const SubNavWrapper = ({fulldata, match}) => {
    let { name } = match.params;
    const data_array = fulldata[name.toLowerCase()];
    return (
        <div className='subwrapper'>
            {data_array.map(element => (
                <SubNav element={element} />
            ))}
        </div>
    )
};

export default SubNavWrapper;