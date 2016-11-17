import React from 'react';
import requireAuth from '../auth/RequireAuth';
import {connect} from 'react-redux';

import {fetchTables} from '../../actions/index';



class TablesOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        this.props.fetchTables();
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

    render() {
        return (
            <section className="container padding16 autoMargin">
                <table className="card_2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>T1</td>
                            <td>Example details</td>
                        </tr>
                        <tr>
                            <td>T1</td>
                            <td>Example details</td>
                        </tr>
                        <tr>
                            <td>T1</td>
                            <td>Example details</td>
                        </tr>
                        <tr>
                            <td>T1</td>
                            <td>Example details</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

function mapStateToProps(state){
    return { tables: state.tables };
}

export default connect(mapStateToProps, {fetchTables})(requireAuth(TablesOverview));