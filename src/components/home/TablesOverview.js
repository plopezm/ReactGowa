import React from 'react';

class TablesOverview extends React.Component {
    constructor(props) {
        super(props);
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

    render() {
        return (
            <section>
                <table>
                    <thead>
                        <th>Name</th>
                        <th>Details</th>
                    </thead>
                    <tbody>
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

export default TablesOverview;