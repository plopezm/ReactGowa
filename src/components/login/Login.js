import React from 'react';

import styles from './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static contextTypes = {
        appName: React.PropTypes.string
    }


    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
    }

    componentDidMount() {
        // Called after the component has been rendered into the page
    }

    componentWillReceiveProps(nextProps) {
        // Called when the props provided to the component are changed
    }

    componentWillUpdate(nextProps, nextState) {
        // Called when the props and/or state change
    }

    componentWillUnmount() {
        // Called when the component is removed
    }

    onPushSubmit(e){
        e.preventDefault();


    }

    render() {

        console.log(this.context);

        return (
            <div className={`col88 fullHeight card_4 padding16 ${styles.loginBoxMargin} ${styles.size}`}>
                <header>
                    <h1 className="aligncenter text_wide noMargin">{this.context.appName}</h1>
                </header>
                <section>
                    <form className="container wrap input_group" onSubmit={this.onPushSubmit}>

                        <hr/>
                        <input className="col100" type="text" placeholder="Username" />
                        <input className="col100 input_control" type="password" placeholder="Password"/>
                        <div className="fullWidth">
                            <input type="submit" className="fullWidth button_green" value="Sign in" />
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

export default Login;