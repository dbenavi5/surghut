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

    url = "https://raw.githubusercontent.com/datadesk/california-coronavirus-data/master/latimes-county-totals.csv";

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
            const caseDate = row[0];
            const countyName = row[1];
            const fibs = Number(row[2]);
            const deathCount = Number(row[4]);
            const newConfirmedTotal = Number(row[5]);
            const newDeathCount  = Number(row[6]);
            const totalConfirmed = Number(row[3]); //total confirmed cases  in CA

            if (caseDate !== "") {
                counties.push({
                    date: caseDate,
                    id: fibs,
                    county: countyName,
                    deathCount :  deathCount,
                    total_confirmed_cases: totalConfirmed,
                    new_confirmed_cases: newConfirmedCases,
                    new_deaths: newDeathCount,
                });
                
                confirmedCases += totalConfirmed;
                totalDeathCount  += deathCount; 
                newConfirmedCases += newConfirmedTotal;
                newDeaths += newDeathCount;
            }
        }
        await new Promise ((x) => setTimeout(x, 500));

        this.setState({ counties, confirmedCases });
    }

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
                    <CovidTable counties={counties}/> 
                )}
            </div>
        );
    } 
}

export default Covid;