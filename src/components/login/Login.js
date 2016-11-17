import React from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import {authenticate} from '../../actions/index';

import styles from './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.handleUser = this.handleUser.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.onPushSubmit = this.onPushSubmit.bind(this);
    }

    static contextTypes = {
        appName: React.PropTypes.string
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        if(this.props.auth.isAuth){
            browserHistory.push('/home');
        }
    }

    componentWillReceiveProps(nextProps) {
        // Called when the props provided to the component are changed
        console.log(nextProps)
        if(nextProps.auth.isAuth){
            browserHistory.push('/home');
        }
    }

    handleUser(e){
        this.setState({user: e.target.value});
    }

    handlePassword(e){
        this.setState({password: e.target.value});
    }

    onPushSubmit(e){
        e.preventDefault();
        this.props.authenticate(true);
    }

    render() {
        // console.log(this.context);
        return (
            <div className={`col88 fullHeight card_4 padding16 ${styles.loginBoxMargin} ${styles.size}`}>
                <header>
                    <h1 className="aligncenter text_wide noMargin">{this.context.appName}</h1>
                </header>
                <section>
                    <form className="container wrap input_group" onSubmit={this.onPushSubmit}>

                        <hr/>
                        <input className="col100" type="text" onChange={this.handleUser} placeholder="Username" />
                        <input className="col100 input_control" onChange={this.handlePassword} type="password" placeholder="Password"/>
                        <div className="fullWidth">
                            <input type="submit" className="fullWidth button_green" value="Sign in" />
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {auth: state.auth};
}

export default connect(mapStateToProps, {authenticate})(Login);