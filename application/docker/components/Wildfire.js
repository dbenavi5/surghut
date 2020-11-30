import React, {Component} from 'react';
// import FireGrid from '../components/FireGrid';
// import { fetchFireData } from '../api/fire/fetchFireData';

class Wildfire extends Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: [],
            name: [],
        }
    }

    // url = "https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=true";

    async componentDidMount() {
        fetch("https://www.fire.ca.gov/umbraco/api/IncidentApi/List?inactive=2020")
            .then(response => 
                response.json(console.log(response))) 
            .then(
                (Name) => {
                    this.setState({
                        isLoading: true,
                        data: Name.data
                    });
                },

                (error) => {
                    this.setState({
                        isLoading: true,
                        error
                    });
                }
            )
    }
    
    render(){

        const {error, isLoaded, data }= this.state;

        if(error) {
            return <div>Error: {error.message}</div>
        } else if (!isLoaded){
            return <div>Loading</div>
        } else {
            return(
                <ul>
                    {data.map(item => (
                        <li key={item.Name}>
                            {item.Name}
                        </li>
                    ))}
                </ul>
            )
        }

    }
}

export default Wildfire;