import React from 'react';
import FireGrid from '../components/FireGrid';
import { fetchFireData } from '../api/fire/fetchFireData';

class Wildfire extends React.Component{
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchFireData();

        this.setState({data: fetchedData});
    }
    render(){

        const { data } = this.state;
        return(
            <div>
                <FireGrid data={data}/>
            </div>
        )
    }
}

export default Wildfire;