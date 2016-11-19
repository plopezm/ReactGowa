/**
 * Created by pablolm on 14/11/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

import {validate} from '../../actions/index';


export default function(ComposedComponent){

    class Authentication extends Component{

        constructor(props){
            super(props);
        }

        componentWillMount() {
            if(!this.props.auth.isAuth) {
                browserHistory.push("/login");
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.auth.isAuth) {
                browserHistory.push("/login");
            }
        }

        render(){
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return { auth: state.auth };
    }

    return connect(mapStateToProps, { validate })(Authentication);
}