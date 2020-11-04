import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

class Chart extends Component{
    //handleClick = () => this.setState(false);
    render() { 
        const { counties } = this.props;

        if ( counties.length === 0 ) return <div></div>

        const data = {
            labels: counties.map( (county) => county.county),
            datasets: [
                {
                    data: counties.map( (county ) => county.totalConfirmed ),
                    backgroundColor: colors,
                }
            ]
        }
        return (
            <div>
                <Pie 
                    data={data} 
                    width={300} 
                    height={400} 
                    options={{maintainAspectRatio: false }}
                />

                {/* <button type="button" onClick={this.handleClick}>Clear</button> */}

            </div>
        );
    }

}

export default Chart;

let colors = [
    "#63b598",
  "#ce7d78",
  "#ea9e70",
  "#a48a9e",
  "#c6e1e8",
  "#648177",
  "#0d5ac1",
  "#f205e6",
  "#1c0365",
  "#14a9ad",
  "#4ca2f9",
  "#a4e43f",
  "#d298e2",
  "#6119d0",
  "#d2737d",
  "#c0a43c",
  "#f2510e",
  "#651be6",
  "#79806e",
  "#61da5e",
  "#cd2f00",
  "#9348af",
  "#01ac53",
  "#c5a4fb",
  "#996635",
  "#b11573",
  "#4bb473",
  "#75d89e",
  "#2f3f94",
  "#2f7b99",
  "#da967d",
  "#34891f",
  "#b0d87b",
  "#ca4751",
  "#7e50a8",
  "#c4d647",
  "#e0eeb8",
  "#11dec1",
  "#289812",
  "#566ca0",
  "#ffdbe1",
  "#2f1179",
  "#935b6d",
  "#916988",
  "#513d98",
  "#aead3a",
  "#9e6d71",
  "#4b5bdc",
  "#0cd36d",
  "#250662",
  "#cb5bea",
  "#228916",
  "#ac3e1b",
  "#df514a",
  "#539397",
  "#880977",
  "#f697c1",
  "#ba96ce",
  "#679c9d",
];