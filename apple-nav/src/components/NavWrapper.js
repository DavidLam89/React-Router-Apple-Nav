import React from 'react';
import Nav from './Nav';
import './NavWrapper.css';
import { Link } from 'react-router-dom';

const NavWrapper = props => {
    return (
        <div className='wrapper'>
            <Link className='link' to='/'>
                <i className="nav fab fa-apple"></i>
            </Link>
            {props.elements.map(element => (
                <Link className='link' to={`/${element}`} key={element}> 
                    <Nav element={element} />
                </Link>
            ))}
            <i className="nav fas fa-search"></i>
        </div>
    )
};

export default NavWrapper;