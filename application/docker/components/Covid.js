
import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import CovidTable from '../components/CovidTable';
import Chart from '../components/Chart';

class Covid extends Component {
    state  = {
        counties: [],
        id: 0,
        confirmedCases: 0,
        totalDeathCount: 0,
        newConfirmedCases: 0,
        newDeaths: 0,
        date: this.sortByDate,
        selectedCounties: [],
        filterText: "",
    };

    url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/new-db/application/docker/csv_files/dailyStatewideCases.csv?token=ANLI5KY7NR34J6QQAMJJUKS7XDOOO"; 

    // fetchiing data and parsing data
    async componentDidMount() {
        const response = await axios.get(this.url);
        const rows = response.data.split("\n");

        const counties = [];
        let confirmedCases = 0;
        let totalDeathCount = 0;
        let newConfirmedCases = 0;
        let newDeaths = 0;


        //parsing through rows of data table to get right set of row
        for(let i = 1; i < rows.length; i++) {
            const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);  //split on comma
            
            const id = Number(row[0]);
            const countyName = row[1].replace(/"/g,"");
            const totalConfirmed = Number(row[2]);      //total confirmed cases in CA
            const deathCount = Number(row[3]);          //total death count
            const newConfirmedTotal = Number(row[4]);   //total new confirmed
            const newDeathCount  = Number(row[5]);      //total new death count
            const caseDate = row[6];

            if (countyName !== "") {
                counties.push({
                    date: caseDate,
                    id: id,
                    county: countyName,
                    deathCount: deathCount,
                    totalConfirmed: totalConfirmed,
                    newConfirmedCases: newConfirmedCases,
                    newDeathCount: newDeathCount,
                });
                
                confirmedCases += totalConfirmed;
                totalDeathCount  += deathCount; 
                newConfirmedCases += newConfirmedTotal;
                newDeaths += newDeathCount;
            }
        }

        // times to loading, feature 1 seconds to load
        await new Promise ((x) => setTimeout(x, 1000));

        this.setState({ counties, confirmedCases, totalDeathCount, newConfirmedCases, newDeaths });
    }

    //handle selected counties
    handleOnRowSelected = ( countyToUpdate ) => {
        const counties = [...this.state.counties];
        const countyIndex = counties.findIndex(
            (c)=>c.county === countyToUpdate.county
        );

        const county = {
            date: countyToUpdate.date,
            id: countyToUpdate.id,
            county: countyToUpdate.county,
            deathCount: countyToUpdate.deathCount,
            totalConfirmed: countyToUpdate.totalConfirmed,
            newConfirmedCases: countyToUpdate.newConfirmedCases,
            newDeathCount: countyToUpdate.newDeathCount,
            selected: !countyToUpdate.selected,
        }

        counties[countyIndex] = county;

        this.setState({ 
            counties, 
            selectedCounties:counties.filter((c) => c.selected ),
        });
    };
    
    //sort total by largest amount
    sortByTotal  = ( countyA, countyB ) => {
        if( countyB.totalConfirmed > countyA.totalConfirmed ) return 1;
        else if ( countyB.totalConfirmed < countyA.totalConfirmed ) return -1;
        else return 0;

    };

    // handles sort event of confirmed cases
    handleOnSortByTotal = ( event ) => {
        this.handleOnSortBy( event, this.sortByTotal );
    };

    sortByCountyName = ( countyA, countyB ) => {
        if( countyA.county > countyB.county ) return 1;
        else if ( countyA.county < countyB.county ) return -1;
        else return 0;
    };

    handleOnSortCountyName = ( event ) => {
        this.handleOnSortBy( event, this.sortByCountyName );
    };

    sortById = ( countyA, countyB ) => {
        if( countyB.id > countyA.id ) return 1;
        else if ( countyB.id < countyA.id ) return -1;
        else return 0;
    };

    handleOnSortById = ( event ) => {
        this.handleOnSortBy( event, this.sortById);
    };
    
    sortByDate = ( countyA, countyB ) => {
        if( countyB.date > countyA.date ) return 1;
        else if ( countyB.date < countyA.date ) return -1;
        else return 0;
    };


    handleOnSortByDate = ( event ) => {
        this.handleOnSortBy( event, this.sortByDate);
    };


    //handles sort functions for each column
    handleOnSortBy = ( event, sortOperation )  => {
        event.preventDefault();
        const counties = [...this.state.counties];
        counties.sort(sortOperation);
        this.setState({ counties });
    };

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    // handles search filter
    handleFilterTextChange = (event) => {
        const filterText = event.target.value;
        this.setState({ filterText: filterText });
    };

    //handles clear button
    handleReset = () => {
        const counties = [...this.state.counties];
        for (let i = 0; i < counties.length; i++) {
            var c = counties[i];

            const county = {
                date: c.date,
                id: c.id,
                county: c.county,
                deathCount: c.deathCount,
                totalConfirmed: c.totalConfirmed,
                newConfirmedCases: c.newConfirmedCases,
                newDeathCount: c.newDeathCount,
                selected: false,
            };
            counties[i] = county;
        }

        this.setState({
            counties,
            selectedCounties: counties.filter((c) => c.selected),
        });
    }

    render() {
        const {
            counties, 
            confirmedCases,
            totalDeathCount,
            newConfirmedCases,
            newDeaths,
            selectedCounties,
            filterText,
        } = this.state;
        
        return (
            <div>
                <h1 className="h1-tag">Coronavirus Stats</h1>
                <h2 className="h2-tag"> As Of November 2, 2020 </h2>
                <div className="tag-wrap">
                    <h3 className="h3-tag"> Confirmed Cases: {this.numberWithCommas(confirmedCases)} </h3>
                    <h3 className="h3-tag"> Death Count: {this.numberWithCommas(totalDeathCount)} </h3>
                    <h3 className="h3-tag"> New Confirmed Cases: {this.numberWithCommas(newConfirmedCases)} </h3>
                    <h3 className="h3-tag"> New Deaths Count: {this.numberWithCommas(newDeaths)} </h3>
                </div>
                <h3 className="select-intruct">Compare Death Rate with other counties in California.
                    <br/>
                    Select from the table a county or counties to compare death rate.
                </h3>
                { confirmedCases === 0 ? (
                    <Loading/> 
                ) : (
                    <div>
                        <div>
                            <input
                                type="text"
                                value={filterText}
                                onChange={this.handleFilterTextChange}
                                className="chart-search-filter"
                                placeholder="Search"
                            />
                            <button 
                                className="clear-btn"
                                type="button" 
                                onClick={this.handleReset}>
                                    Clear
                            </button>
                        </div>
                        <Chart counties={selectedCounties} />
                        <CovidTable 

                            counties={counties.filter((county) => {
                                if (filterText === "") {
                                    return county;
                                }
                                return (
                                    county.county
                                        .toLowerCase()
                                        .indexOf(filterText.toLowerCase()) >= 0
                                );
                            })} 

                            // sorts each column
                            onSortByTotal = {this.handleOnSortByTotal}
                            onSortByCountyName = {this.handleOnSortCountyName}
                            onSortById = {this.handleOnSortById}
                            onSortByDate = {this.handleOnSortByDate}
                            onRowSelected = {this.handleOnRowSelected}
                        /> 
                    </div>
                )}
            </div>
        );
    } 
}

export default Covid;