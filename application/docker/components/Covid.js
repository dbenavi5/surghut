import React, { Component } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import CovidTable from '../components/CovidTable';


class Covid extends Component {
    state  = {
        counties: [],
        id: 0,
        confirmedCases:0,
        deaths:0,
        newConfirmedCases: 0,
        newDeaths: 0
    };

    url = "https://raw.githubusercontent.com/CSC-648-SFSU/csc648-02-fa20-team03/db/application/docker/csv_files/Covid_cases.csv?token=ANLI5K2V547BDYKE7PNPCCK7VM7F6";

    async componentDidMount() {
        const response = await axios.get(this.url);
        const rows = response.data.split("\n");

        const counties = [];
        let confirmedCases = 0;
        let totalDeathCount  = 0;
        let newConfirmedCases  = 0;
        let newDeaths  = 0;


        for(let i = 1; i < rows.length; i++) {
            const row = rows[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);  //split on comma
            
            const id = Number(row[0]);
            const countyName = row[1];
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
                    deathCount :  deathCount,
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
        await new Promise ((x) => setTimeout(x, 100));

        this.setState({ counties, confirmedCases });
    }

    sortByTotal  = ( countyA, countyB ) => {
        if( countyB.totalConfirmed > countyA.totalConfirmed ) return 1;
        else if ( countyB.totalConfirmed < countyA.totalConfirmed ) return -1;
        else return 0;

    };

    handleOnSortByTotal = ( event ) => {
        event.preventDefault();
        const counties = [...this.state.counties];
        counties.sort(this.sortByTotal);
        this.setState({ counties });
    };

    sortByCountyName = ( countyA, countyB ) => {
        if( countyA.county > countyB.county ) return 1;
        else if ( countyA.county < countyB.county ) return -1;
        else return 0;
    };

    handleOnSortCountyName = ( event ) => {
        event.preventDefault();
        const counties = [...this.state.counties];
        counties.sort(this.sortByCountyName);
        this.setState({ counties });
    };

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {

        const { counties, confirmedCases } = this.state;
        return (
            <div>
                <h1>Covid Confirmed Cases: { this.numberWithCommas(confirmedCases) } </h1>
                { confirmedCases === 0 ? (
                    <Loading/> 
                ) : (
                    <CovidTable 
                        counties={counties} 
                        onSortByTotal = {this.handleOnSortByTotal}
                        onSortByCountyName = {this.handleOnSortCountyName}
                    /> 
                )}
            </div>
        );
    } 
}

export default Covid;