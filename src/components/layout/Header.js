import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={styleHeader}>
            <h1>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    ) 
}

const styleHeader = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
}

const linkStyle = {
    color: '#FFF',
    textDecoration: 'none'
}

export default Header