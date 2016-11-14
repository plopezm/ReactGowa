import React, { Component, PropTypes } from 'react';

import Navigation from './nav/Navigation';

const menuMain = {
    title: "Gowa", href: "#"
}

const menuItems = [
    { title: "Other", href: "https://github.com/plopezm/gowa", target: "_blank"},
    { title: "Github", href: "https://github.com/plopezm/gowa", target: "_blank"}
];

export default class App extends Component {
    constructor(props){
        super(props);
    }

    getChildContext() {
        return {appName: "Gowa"};
    }

    render() {
        return (
            <div>
                <Navigation menuMain={menuMain} menuItems={menuItems}/>

                { this.props.children }
            </div>
        );
    }
}

App.childContextTypes = {
    appName: React.PropTypes.string
};