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
    };

    url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/db/application/docker/csv_files/statewide_covid_cases.csv?token=ANLI5K2LHKEQRFDTH7ZAOVC7VO45G";
    async componentDidMount() {
        const response = await axios.get(this.url);
        const rows = response.data.split("\n");

        const counties = [];
        let confirmedCases = 0;
        let totalDeathCount = 0;
        let newConfirmedCases = 0;
        let newDeaths = 0;


        //parsing through rows of data table
        for(let i = 1; i < rows.length; i++) {
            const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);  //split on comma
            
            const id = Number(row[0]);
            const countyName = row[1].replace(/"/g,"");
            const totalConfirmed = Number(row[2]); //total confirmed cases  in CA
            const deathCount = Number(row[3]);
            const newConfirmedTotal = Number(row[4]);
            const newDeathCount  = Number(row[5]);
            const caseDate = row[6];

            if (caseDate !== "") {
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

    handleOnSortByTotal = ( event ) => {
        this.handleOnSortBy( event, this.sortByTotal );
    };

    sortByCountyName = ( countyA, countyB ) => {
        if( countyA.county > countyB.county ) return 1;
        else if ( countyA.county < countyB.county ) return -1;
        else return 0;
    };

    handleOnSortCountyName = ( event ) => {
        this.handleOnSortBy( event, this.sortByCountyName);
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

    render() {

        const {
            counties, 
            confirmedCases,
            totalDeathCount,
            newConfirmedCases,
            newDeaths,
            selectedCounties,
        } = this.state;
        
        return (
            <div>
                <h1>As Of November 2, 2020 </h1>
                <h2>Covid Confirmed Cases: { this.numberWithCommas(confirmedCases) } </h2>
                <h2>Death Count: { this.numberWithCommas(totalDeathCount) } </h2>
                <h2>New Confirmed Cases: { this.numberWithCommas(newConfirmedCases) } </h2>
                <h2>New Deaths Count: { this.numberWithCommas(newDeaths) } </h2>
                { confirmedCases === 0 ? (
                    <Loading/> 
                ) : (
                    <div>
                        <Chart counties={ selectedCounties }/>
                        <CovidTable 
                            counties={ counties } 
                            onSortByTotal = { this.handleOnSortByTotal }
                            onSortByCountyName = { this.handleOnSortCountyName }
                            onSortById = { this.handleOnSortById }
                            onSortByDate = { this.handleOnSortByDate }
                            onRowSelected = { this.handleOnRowSelected }
                        /> 
                    </div>
                )}
            </div>
        );
    } 
}

export default Covid;