import React from 'react';
import { Link } from 'react-router-dom'

function Header(){
    return (
        <header  className="headerStyle">
            <h1>To Do List!</h1>
            <Link style={linkStyle} to="/">Home </Link>
            <p style={{ display: 'inline' }}> | </p>
            <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const linkStyle = {
    color: '#f3f3f3',
    texDecoration: 'none'
}

export default Header;