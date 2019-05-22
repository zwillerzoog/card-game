import React from 'react';
import Navigation from './components/Navigation';
import Router from './Router';

class Layout extends React.Component {
    render() {
        return (
            <div className = "container" >
                <Navigation />
                <Router />
            </div>
        )
    }
}

export default Layout;