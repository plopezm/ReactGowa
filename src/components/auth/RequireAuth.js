/**
 * Created by pablolm on 14/11/16.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


export default function(ComposedComponent){

    class Authentication extends Component{
        componentWillMount() {
            if(!this.props.authenticated) {
                browserHistory.push("/login");
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated) {
                browserHistory.push("/login");
            }
        }

        render(){
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return { authenticated: state.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}