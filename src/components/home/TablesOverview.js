import React from 'react';
import requireAuth from '../auth/RequireAuth';
import {connect} from 'react-redux';
import { browserHistory } from 'react-router';

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

    renderRowStruct(columns){
        if(!columns)
            return;

        return Object.keys(columns).map((index, i) => {
            const col = columns[index];
            if(i == 0){
                return `${col.name}`;
            }else{
                return `, ${col.name}`;
            }
        });
    }

    renderTables(){
        if(!this.props.tables){
            return;
        }

        return Object.keys(this.props.tables).map((index) => {
            const table = this.props.tables[index];
            const destination = `/show/${table.title}`;
            return (
                <tr key={table.title} onClick={() => browserHistory.push(destination)}>
                    <td>{table.title}</td>
                    <td>{this.renderRowStruct(table.columns)}</td>
                </tr>
            );
        });

    }

    render() {
        return (
            <section className="container wrap padding16 autoMargin aligncenter responsive_table">
                <h1>Site Administration</h1>
                <table className="card_2">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Columns</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.renderTables()}
                    </tbody>
                </table>
            </section>
        );
    }
}

function mapStateToProps(state){
    return { tables: state.tables.all };
}

export default requireAuth(connect(mapStateToProps, {fetchTables})(TablesOverview));