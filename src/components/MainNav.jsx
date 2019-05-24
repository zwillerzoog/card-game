import React from 'react';


const ul = {
    padding: 10,
    listStyle: "none",
    display: "flex",
    margin: 0,
    // backgroundColor:"#9bd6ff",
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0
};

const li = {
    marginLeft:20,
    marginRight: 20,
    textDecoration: "none"
};

const MainNav = () => {
    return (
        <ul className='mainNav' >
            <li ><a href={'/'}>Home</a></li>
            <li ><a href={'/'}>Play</a></li>
        </ul>
    )
};

export default MainNav;