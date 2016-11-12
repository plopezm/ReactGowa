import React from 'react';

import grid from '../Grid.css'
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
                    <ul id="navigation-topnav" className={`${styles.navbar} ${styles.navbar_menu} ${grid.card_2} ${grid.text_wide} ${grid.container} ${grid.wrap}`}>

                        <li className={`${grid.colleft} ${grid.aligncenter} ${styles.auto_margin} ${grid.hideLscreen} ${grid.hideXLscreen}`}>
                            <a href="javascript:void(0);"
                               onClick={() => this.toggleSideNav()}
                               className="">☰</a>
                        </li>
                        <li className={`${grid.colleft} ${grid.alignleft} ${styles.auto_margin}`}>
                            <a href={this.props.menuMain.href} className=""><strong>{this.props.menuMain.title}</strong></a>
                        </li>
                        <li className={`${grid.container} ${grid.hideXSscreen} ${grid.hideSscreen} ${grid.hideMscreen}`} >
                            <ul className={`${grid.container} ${grid.wrap}`}>
                                {this.renderLinks(`${grid.aligncenter} ${grid.hideXSscreen} ${grid.hideSscreen}  ${grid.hideMscreen}`)}
                            </ul>
                        </li>
                    </ul>
                </nav>
                <aside id="navigation-sidenav" className={`${grid.card_2} ${styles.sidenav}`}>
                    {/*<div className={`${grid.container}`}>*/}
                        {/*<a className={`${styles.menuButtonMenu}`} href="javascript:void(0)" onClick={() => this.toggleSideNav()}>☰</a>*/}
                        {/*<h4 className={`${grid.col88} ${grid.alignleft} ${styles.menuButtonMenu}`} >Menu</h4>*/}
                    {/*</div>*/}
                    <hr/>
                    <ul className={`${styles.navbar} ${styles.navbar_menu}`}>
                    {this.renderLinks(`${grid.col100}`, `${grid.alignleft} ${styles.sidelink}`)}
                    </ul>
                </aside>


            </header>
        );
    }
}

export default Navigation;

