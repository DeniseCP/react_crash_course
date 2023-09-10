import React from 'react';

export const Header = () => {
    return (
        // @ts-ignore
        <header style={ headerStyle }>
            <h1>TodoList</h1>
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
export default Header;
