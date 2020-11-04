import React, { Component } from 'react';

class CovidTable extends Component {
    render() {
        const { counties } = this.props;

        return (
            <table className="data-table">
                <thead>
                    <tr >
                        <th>Date</th>
                        <th>County</th>
                        <th>Confirmed Cases</th>
                        <th>Deaths</th>
                        <th>New Confirmed Cases</th>
                        <th>New Deaths</th>                      
                    </tr>
                </thead>
                <tbody>
                    {
                        counties.map(( county ) => (
                            <tr key={county.id}>
                                <td>{county.id}</td>
                                <td>{county.date}</td>
                                <td>{county.county}</td>
                                <td>{county.total_confirmed_cases}</td>
                                <td>{county.deathCount}</td>
                                <td>{county.new_confirmed_cases}</td>
                                <td>{county.new_deaths}</td>
                            </tr>
                    ))}
                </tbody>
            </table>
        );
    };
}

export default CovidTable;