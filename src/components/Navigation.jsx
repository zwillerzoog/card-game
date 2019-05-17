import React from 'react';


const ul = {
    padding: 10,
    listStyle: "none",
    display: "flex",
    margin: 0,
    backgroundColor:"#9bd6ff",
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

const Navigation = () => {
    return (
        <ul style={ul} >
            <li style={li}><a style={li} href={'/'}>Home</a></li>
            <li style={li}><a style={li} href={'/'}>Play</a></li>
        </ul>
    )
};

export default Navigation;