import React, { Component, PropTypes } from 'react';
import Navigation from './nav/Navigation';
import { connect } from 'react-redux';

import { validate } from '../actions/index';

const menuMain = {
    title: "Gowa", href: "#"
}

const menuItems = [
    { title: "Github", href: "https://github.com/plopezm/gowa", target: "_blank"}
];


class App extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.props.validate();
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

//Declaring context variables
App.childContextTypes = {
    appName: React.PropTypes.string
};

export default connect(null, { validate })(App);
