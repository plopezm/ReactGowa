import React from 'react';

import styles from './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { toggle: false };

        this.toggleSideNav = this.toggleSideNav.bind(this);
    }

    componentDidMount() {
        // Called the first time the component is loaded right before the component is added to the page
    }

    toggleSideNav(){
        if(!this.state.toggle){
            document.getElementById("navigation-sidenav").style.width = "60vw";
            this.setState({ toggle: true });
        }else{
            document.getElementById("navigation-sidenav").style.width = "0";
            this.setState({ toggle: false });
        }
    }

    renderLinks(liclasses = "", aclasses = ""){
        return this.props.menuItems.map((item) => {
            return (
                <li key={item.title} className={`${liclasses}`}>
                    <a href={item.href} className={`${aclasses}`} target={item.target}>{item.title}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <header>
                <nav>
                    <ul id="navigation-topnav" className={`navbar navbar_menu card_2 text_wide container wrap ${this.props.theme}`}>

                        <li className={`colleft aligncenter ${styles.auto_margin} hideLscreen hideXLscreen`}>
                            <a href="javascript:void(0);"
                               onClick={() => this.toggleSideNav()}
                               className={`${this.props.textColor}`}>☰</a>
                        </li>
                        <li className="autoMarginHeigth colleft alignleft">
                            <a href={this.props.menuMain.href} className={`${this.props.textColor}`}><strong>{this.props.menuMain.title}</strong></a>
                        </li>
                        <li className="container hideXSscreen hideSscreen hideMscreen" >
                            <ul className="container wrap">
                                {this.renderLinks("aligncenter hideXSscreen hideSscreen  hideMscreen", `${this.props.textColor}`)}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <aside id="navigation-sidenav" className="card_2 sidenav">
                    {/*<div className={`${grid.container}`}>*/}
                    {/*<a className={`${styles.menuButtonMenu}`} href="javascript:void(0)" onClick={() => this.toggleSideNav()}>☰</a>*/}
                    {/*<h4 className={`${grid.col88} ${grid.alignleft} ${styles.menuButtonMenu}`} >Menu</h4>*/}
                    {/*</div>*/}
                    <hr/>
                    <ul className="navbar navbar_menu">
                        {this.renderLinks("col100", "alignleft sidelink")}
                    </ul>
                </aside>


            </header>
        );
    }
}

export default Navigation;

