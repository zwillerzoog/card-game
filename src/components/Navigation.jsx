import React from 'react';
import MainNav from './MainNav';
import UserNav from './UserNav'
import './Navigation.css'

const Navigation = () => {

    const style = {
        listStyle: "none",
        display: "flex",
        margin: 0,
        backgroundColor:"#9bd6ff",
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        boxShadow: '2px 0px 10px 0px cornflowerblue'
    };
    return (
       <div className={"navbar"}>
           <MainNav/>
           <UserNav/>
       </div>
    )
};

export default Navigation;