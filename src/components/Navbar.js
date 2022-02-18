import React from 'react'

const Navbar = ({ getpersonData }) => {
    return (
        <nav className="navbar">
            <div className='navbar-container container-a'>
                <div className="logo"><p>Users Data</p></div>
                <button type="button" onClick={() => getpersonData(1)}>View Users</button>
            </div>
        </nav>
    )
}

export default Navbar;