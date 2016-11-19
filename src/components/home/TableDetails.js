import React from 'react';
import { connect } from 'react-redux';
import requireAuth from '../auth/RequireAuth';

import { showTable } from '../../actions/index';


class TableDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        this.props.showTable(this.props.params.id);
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

    renderColumns(){
        return this.props.table.columns.map((col)=>{
            return <th key={col}>{col}</th>
        })
    }

    renderRows(){
        return this.props.table.rows.map((row, i) => {
            console.log(row)
            const tds = Object.keys(row).map((title, j) => {
                return (
                    <td key={j}>
                        {row[title]}
                    </td>
                );
            })

            return (
                  <tr key={i}>
                      {tds}
                  </tr>
            );
        })
    }

    render() {
        console.log("Showing table: ",this.props.table);
        if(!this.props.table){
            return <section></section>
        }


        return (
            <section className="padding16 autoMargin">
                <h2>Showing table { this.props.params.id }</h2>
                <table className="card_2">
                    <thead>
                    <tr>
                        {this.renderColumns()}
                    </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </section>
        );
    }
}

function mapStateToProps(state){
    return { table: state.tables.selected }
}

export default requireAuth(connect(mapStateToProps, {showTable})(TableDetails));