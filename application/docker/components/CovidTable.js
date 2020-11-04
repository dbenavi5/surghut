import React, { Component } from 'react';

class CovidTable extends Component {
    render() {
        const { counties, onSortByTotal, onSortByCountyName } = this.props;

        return (
            <table className="data-table">
                <thead>
                    <tr >
                        <th>id</th>
                        <th>
                            <a href="/" onClick={ onSortByCountyName }>County</a>
                        </th>
                        <th>
                            <a href="/" onClick={ onSortByTotal }>Confirmed Cases</a>
                        </th>
                        <th>Deaths</th>
                        <th>New Confirmed Cases</th>
                        <th>New Deaths</th>
                        <th>Date</th>                      
                    </tr>
                </thead>
                <tbody>
                    {
                        counties.map(( county ) => (
                            <tr key={county.id}>
                                <td>{county.id}</td>
                                <td>{county.county}</td>
                                <td>{county.totalConfirmed}</td>
                                <td>{county.deathCount}</td>
                                <td>{county.newConfirmedCases}</td>
                                <td>{county.newDeathCount}</td>
                                <td>{county.date}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default CovidTable;