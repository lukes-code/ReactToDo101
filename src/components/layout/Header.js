import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">Home </Link>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    width: '75%',
    margin: '0 auto',
}

const linkStyle = {
    color: '#f3f3f3',
    texDecoration: 'none'
}

export default Header;