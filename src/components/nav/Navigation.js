import React from 'react';

import grid from '../../../style/Grid.css'
import styles from './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.showSideNav = this.showSideNav.bind(this);
    }

    componentDidMount() {
        // Called the first time the component is loaded right before the component is added to the page
    }

    showSideNav(toggle){
        if(toggle){
            document.getElementById("navigation-sidenav").style.width = "65vw";
        }else{
            document.getElementById("navigation-sidenav").style.width = "0";
        }
    }

    renderLinks(liclasses = "", aclasses = ""){
        return this.props.menuItems.map((item) => {
            return (
                <li key={item.title} className={liclasses}>
                    <a href={item.href} className={aclasses} target={item.target}>{item.title}</a>
                </li>
            );
        });
    }

    render() {
        return (
            <header>
                <nav>
                    <ul id="navigation-topnav" className={`w3-navbar w3-card-2 w3-wide ${grid.container}`}>

                        <li className={`${grid.colleft} ${grid.col12} ${grid.aligncenter} ${grid.hideMscreen} ${grid.hideLscreen} ${grid.hideXLscreen}`}>
                            <a href="javascript:void(0);"
                               onClick={() => this.showSideNav(true)}
                               className="">☰</a>
                        </li>
                        <li key={this.props.menuMain.title}  className={`${grid.colleft} ${grid.aligncenter}`}>
                            <a href={this.props.menuMain.href} className=""><strong>{this.props.menuMain.title}</strong></a>
                        </li>
                        <li className={`${grid.container} ${grid.col100} ${grid.right} ${grid.hideXSscreen} ${grid.hideSscreen}`} >
                            <ul className={`${grid.container} ${grid.col100} ${grid.right}`}>
                                {this.renderLinks(`${grid.aligncenter} ${grid.hideXSscreen} ${grid.hideSscreen}`)}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <aside id="navigation-sidenav" className={`w3-card-2 ${styles.sidenav}`}>
                    <div className={`${grid.container}`}>
                        <a className={`${grid.col12} ${styles.menuButtonMenu}`} href="javascript:void(0)" onClick={() => this.showSideNav(false)}>☰</a>
                        <h4 className={`${grid.col88} ${styles.menuButtonMenu}`} >Menu</h4>
                    </div>
                    <hr/>
                    <ul className={`w3-navbar`}>
                    {this.renderLinks(undefined, `${styles.sidelink}`)}
                    </ul>
                </aside>


            </header>
        );
    }
}

export default Navigation;

