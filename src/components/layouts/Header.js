import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        // @ts-ignore
        <header style={ headerStyle }>
            <h1>TodoList</h1>
            <Link to="/" style={ linkStyle }>Home</Link> | <Link to="/about" style={ linkStyle }>About</Link>
        </header>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    lineHeight: '1.75em',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
};
export default Header;
