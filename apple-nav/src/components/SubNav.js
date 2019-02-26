import React from 'react';

const SubNav = props => {
    return (
        <div className='subnav'>
            <img src={props.element.svgUrl} alt=''/>
            {props.element.name}
        </div>
    )
};

export default SubNav;