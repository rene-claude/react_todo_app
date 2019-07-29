import React from 'react';
import { Link } from "react-router-dom";

function Header(){
    return (
        <header style={headerStyle}>
            <h1> To-do App </h1>
            <Link style={linkStyle} to="/">Home</Link>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: '5px 0px'
}

const linkStyle = {
    textDecoration: 'none',
    backgroundColor: '#efefef',
    color: '#000',
    margin: '10px 5px',
    padding: '5px 10px'
}

export default Header;