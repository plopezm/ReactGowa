import React from 'react';
import { connect } from 'react-redux';
import requireAuth from '../auth/RequireAuth';
import { Link } from 'react-router';

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
            return <th key={col.name}>{col.name}</th>
        })
    }

    renderRows(){
        return this.props.table.rows.map((row, i) => {
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
        if(!this.props.table || this.props.table.rows.length == 0){
            return (<section className="container wrap padding16 col100">
                    <div className="container wrap col100 padding16 autoMargin right">
                        <Link to="/"  className="button button_black"> Back </Link>
                        <Link to={newRowPath} className="button button_black" > New </Link>
                    </div>
                        <h1 className="col100 aligncenter">Table { this.props.params.id } is empty</h1>
                </section>
            );
        }

        const newRowPath = `/new/${this.props.table.title}`;

        return (
            <section className="container wrap padding16 autoMargin responsive_table">
                <div className="container wrap col100 padding16 autoMargin right">
                    <Link to="/"  className="button button_black"> Back </Link>
                    <Link to={newRowPath} className="button button_black" > New </Link>
                </div>
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