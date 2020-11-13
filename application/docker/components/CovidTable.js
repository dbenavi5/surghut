import React, { Component } from 'react';

class CovidTable extends Component {


    render() {

        const { 
            counties, 
            onSortByTotal, 
            onSortByCountyName,
            onSortById,
            onSortByDate,
            onRowSelected,
        } = this.props;

        return (
            <>
            <table className="data-table">
                <thead>
                    <tr >
                        <th>
                            <a href="/" onClick={ onSortById }>id</a>
                        </th>
                        <th>
                            <a href="/" onClick={ onSortByCountyName }>County</a>
                        </th>
                        <th>
                            <a href="/" onClick={ onSortByTotal }>Confirmed Cases</a>
                        </th>
                        <th>Deaths</th>
                        <th>New Confirmed Cases</th>
                        <th>New Deaths</th>
                        <th>
                            <a href="/" onClick={ onSortByDate }>Date</a>
                        </th>                      
                    </tr>
                </thead>
                <tbody>
                    {
                        counties.map(( county ) => {
                            const style = {
                                backgroundColor:'#0cbaba',
                            }
                            return(
                                <tr key={county.id} 
                                style={county.selected ? style : null}
                                onClick={ () => onRowSelected( county )}>
                                    <td>{county.id}</td>
                                    <td>{county.county}</td>
                                    <td>{county.totalConfirmed}</td>
                                    <td>{county.deathCount}</td>
                                    <td>{county.newConfirmedCases}</td>
                                    <td>{county.newDeathCount}</td>
                                    <td>{county.date}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            </>
        );
    }
}

export default CovidTable;