import React from 'react';
import { connect } from 'react-redux';
import RequireAuth from '../auth/RequireAuth';
import { Link } from 'react-router';

import { getTableStruct } from '../../actions/index';

class CreateRow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // Called the first time the component is loaded right before the component is added to the page
        this.props.getTableStruct(this.props.params.id);
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

    renderInputs(){
        return this.props.table.columns.map((col) => {
           return (
               <input key={col.name} type="text" className="col100" placeholder={col.name}/>
           );
        });
    }

    render() {

        if(!this.props.table){
            return <section className="container wrap padding16 col100"><h1 className="col100 aligncenter">Table { this.props.params.id } is empty</h1></section>
        }

        const back = `/show/${this.props.table.title}`;


        return (
            <section className="container wrap padding16">
                <div className="container wrap col100 padding16 autoMargin right">
                    <Link to={back}  className="button button_black"> Back </Link>
                </div>
                <form className="padding16 autoMargin card_2 aligncenter">
                    <h1>Adding row to {this.props.table.title}</h1>
                    {this.renderInputs()}
                    <input type="submit" className="button button_black" value="Save"/>
                </form>
            </section>
        );
    }
}

function mapStateToProps(state){
    return { table: state.tables.selectedStruct }
}

export default RequireAuth(connect(mapStateToProps, {getTableStruct})(CreateRow));