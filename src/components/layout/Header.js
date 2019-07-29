import React from 'react';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>
                Todo App
            </h1>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 0px'
}

export default Header;