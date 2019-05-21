import React from 'react';
import MainNav from './MainNav';
import UserNav from './UserNav'

const Navigation = () => {

    const style = {
        listStyle: "none",
        display: "flex",
        margin: 0,
        backgroundColor:"#9bd6ff",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0
    }
    return (
       <div style={style}>
           <MainNav/>
           <UserNav/>
       </div>
    )
};

export default Navigation;